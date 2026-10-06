import type { jsPDF } from "jspdf";
import { LETTER, SENDER, resolveLetter, type LetterValues } from "./letter";

// Inter Tight, the CV's typeface, with full Latin coverage so names such as
// "Petrović" or "Šimić" print correctly. jsPDF embeds only the glyphs used.
const FONT_FILES = {
  light: "/fonts/inter-tight-300-normal.ttf",
  lightitalic: "/fonts/inter-tight-300-italic.ttf",
  normal: "/fonts/inter-tight-400-normal.ttf",
  bold: "/fonts/inter-tight-600-normal.ttf",
};
type FontStyle = keyof typeof FONT_FILES;
const FONT_STYLES = Object.keys(FONT_FILES) as FontStyle[];

export type LetterKit = { JsPDF: typeof jsPDF; fonts: Record<FontStyle, string> };

let kitPromise: Promise<LetterKit> | null = null;

/** jsPDF and the fonts (base64), fetched once per visit. */
export function loadLetterKit(): Promise<LetterKit> {
  if (!kitPromise) {
    kitPromise = Promise.all([
      import("jspdf"),
      Promise.all(
        FONT_STYLES.map(async (style) => {
          const response = await fetch(FONT_FILES[style]);
          if (!response.ok) throw new Error(`Font ${style}: HTTP ${response.status}`);
          return toBase64(await response.arrayBuffer());
        }),
      ),
    ]).then(([{ jsPDF: JsPDF }, files]) => ({
      JsPDF,
      fonts: Object.fromEntries(FONT_STYLES.map((style, i) => [style, files[i]])) as Record<
        FontStyle,
        string
      >,
    }));
    // Let the next export try again after a network failure.
    kitPromise.catch(() => {
      kitPromise = null;
    });
  }
  return kitPromise;
}

function toBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.length; i += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  }
  return btoa(binary);
}

type RGB = [number, number, number];
const INK: RGB = [10, 10, 10];
const MUTED: RGB = [82, 82, 82];
const FAINT: RGB = [163, 163, 163];
const LINE: RGB = [231, 229, 228];

// Page geometry in mm (A4: 210 × 297).
const TOP = 22;
const LEFT = 22;
const RIGHT = 188;
const BOTTOM = 280;
// Where a Swiss right-hand window envelope shows the address.
const RECIPIENT_X = 118;

/** Lays the letter out on A4, mirroring the on-screen sheet. */
export function buildLetterPdf({ JsPDF, fonts }: LetterKit, values: LetterValues): Blob {
  const doc = new JsPDF({ unit: "mm", format: "a4", compress: true });
  for (const style of FONT_STYLES) {
    const file = `InterTight-${style}.ttf`;
    doc.addFileToVFS(file, fonts[style]);
    doc.addFont(file, "InterTight", style);
  }
  const { recipient, date, subject, salutation } = resolveLetter(values);
  doc.setProperties({ title: `Lettre de motivation – ${SENDER}`, subject, author: SENDER });
  doc.setLanguage("fr");

  let y = TOP;
  const style = (name: FontStyle, size: number, color: RGB) => {
    doc.setFont("InterTight", name);
    doc.setFontSize(size);
    doc.setTextColor(...color);
  };
  // Wrapped text; 1 pt = 0.3528 mm. Justified blocks spread each line's spare
  // width over its word gaps; the last line stays ragged.
  const block = (
    text: string,
    name: FontStyle,
    size: number,
    color: RGB,
    gapAfter: number,
    justify = false,
  ) => {
    style(name, size, color);
    const step = size * 0.3528 * 1.45;
    const width = RIGHT - LEFT;
    const lines: string[] = doc.splitTextToSize(text, width);
    lines.forEach((line, i) => {
      if (y > BOTTOM) {
        doc.addPage();
        y = TOP;
      }
      const words = line.trim().split(/ +/);
      if (justify && i < lines.length - 1 && words.length > 1) {
        const used = words.reduce((sum, word) => sum + doc.getTextWidth(word), 0);
        const gap = (width - used) / (words.length - 1);
        let x = LEFT;
        for (const word of words) {
          doc.text(word, x, y);
          x += doc.getTextWidth(word) + gap;
        }
      } else {
        doc.text(line, LEFT, y);
      }
      y += step;
    });
    y += gapAfter;
  };

  // Letterhead
  style("light", 24, INK);
  doc.text(LETTER.firstName, LEFT, y);
  const firstWidth = doc.getTextWidth(`${LETTER.firstName} `);
  style("lightitalic", 24, INK);
  doc.text(LETTER.lastName, LEFT + firstWidth, y);
  style("normal", 6.8, FAINT);
  doc.setCharSpace(0.55);
  doc.text(LETTER.role.toUpperCase(), LEFT, y + 6.5);
  doc.setCharSpace(0);
  style("normal", 8.8, MUTED);
  LETTER.sender.forEach((line, i) => {
    doc.text(line, RIGHT, y - 7 + i * 4.3, { align: "right" });
  });
  y += 11;
  doc.setDrawColor(...LINE);
  doc.setLineWidth(0.25);
  doc.line(LEFT, y, RIGHT, y);
  y += 13;

  // Recipient, wrapped so a long company name stays inside the margin
  style("normal", 10.5, INK);
  const recipientLines = recipient.flatMap(
    (line): string[] => doc.splitTextToSize(line, RIGHT - RECIPIENT_X),
  );
  recipientLines.forEach((line, i) => {
    doc.text(line, RECIPIENT_X, y + i * 5);
  });
  if (recipientLines.length) y += recipientLines.length * 5 + 9;

  block(date, "normal", 10, MUTED, 5);
  block(subject, "bold", 10.5, INK, 4);
  block(salutation, "normal", 10.5, INK, 2.5);
  for (const paragraph of LETTER.paragraphs) block(paragraph, "normal", 10.5, INK, 3, true);
  block(LETTER.closing, "normal", 10.5, INK, 13, true);
  block(SENDER, "normal", 10.5, INK, 10);
  block(LETTER.annexes, "normal", 8.8, MUTED, 0);

  return doc.output("blob");
}
