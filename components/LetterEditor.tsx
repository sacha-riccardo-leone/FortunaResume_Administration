"use client";

import {
  useEffect,
  useRef,
  useState,
  type ClipboardEvent,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import Icon from "./Icon";
import {
  DATE_PLACEHOLDER,
  FIELDS,
  FIELD_NAMES,
  LETTER,
  PDF_FILENAME,
  RECIPIENT_FIELDS,
  SENDER,
  SUBJECT_LEAD,
  letterText,
  todayLine,
  type FieldName,
  type LetterValues,
} from "@/lib/letter";
import { buildLetterPdf, loadLetterKit, type LetterKit } from "@/lib/letterPdf";

const STORAGE_KEY = "fortuna-cv-letter";

// The sheet is the printed letter, so it stays paper-white in both themes;
// only the desk and the toolbar around it follow the theme.
const FIELD_CLASS =
  "rounded-[2px] border-b border-dashed border-neutral-400 px-[3px] outline-none cursor-text [overflow-wrap:anywhere] transition-colors duration-200 hover:bg-[#f3f3f1] focus:bg-[#f3f3f1] focus-visible:border-solid focus-visible:border-neutral-950 empty:before:italic empty:before:text-neutral-400 empty:before:content-[attr(data-placeholder)] motion-reduce:transition-none print:border-transparent print:empty:before:content-none";
const BUTTON_CLASS =
  "inline-flex h-11 items-center gap-2 rounded-full px-5 text-[13px] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";
const GHOST_CLASS = `${BUTTON_CLASS} border border-ink/25 text-ink hover:border-ink`;
const PRIMARY_CLASS = `${BUTTON_CLASS} bg-ink text-paper hover:bg-ink-soft disabled:opacity-60`;

const readText = (el: HTMLElement | null | undefined) =>
  (el?.textContent ?? "").replace(/\s+/g, " ").trim();

export default function LetterEditor() {
  const fields = useRef<Partial<Record<FieldName, HTMLSpanElement | null>>>({});
  const dateField = useRef<HTMLSpanElement | null>(null);
  const sheet = useRef<HTMLElement>(null);
  const kit = useRef<LetterKit | null>(null);
  const [status, setStatus] = useState("");
  const [exporting, setExporting] = useState(false);

  useEffect(() => {
    // Every visit starts from today's date; it stays editable but is not remembered.
    if (dateField.current) dateField.current.textContent = todayLine();
    // Restore what was typed last time on this device.
    let saved: Record<string, unknown> = {};
    try {
      const parsed: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      if (parsed && typeof parsed === "object") saved = parsed as Record<string, unknown>;
    } catch {
      // ignore storage failures (private mode, etc.)
    }
    for (const name of FIELD_NAMES) {
      const el = fields.current[name];
      const value = saved[name];
      if (el) el.textContent = typeof value === "string" ? value : (FIELDS[name].initial ?? "");
    }
    // Load the PDF engine and fonts now, so the export can run straight from
    // the tap: iOS only opens the share sheet from a direct tap.
    loadLetterKit().then(
      (loaded) => {
        kit.current = loaded;
      },
      () => {
        // retried on the first export
      },
    );
  }, []);

  const values = (): LetterValues => {
    const current = { date: readText(dateField.current) } as LetterValues;
    for (const name of FIELD_NAMES) current[name] = readText(fields.current[name]);
    return current;
  };

  const save = () => {
    try {
      const typed = Object.fromEntries(
        FIELD_NAMES.map((name) => [name, readText(fields.current[name])]),
      );
      localStorage.setItem(STORAGE_KEY, JSON.stringify(typed));
    } catch {
      // ignore: the letter still works for this visit
    }
  };

  const onInput = (event: FormEvent<HTMLSpanElement>) => {
    const el = event.currentTarget;
    // An emptied field must be truly empty so its placeholder shows again.
    if (!el.textContent?.trim()) el.textContent = "";
    if (el !== dateField.current) save();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.currentTarget.blur();
    }
  };

  // Paste as plain text on one line, never as formatted HTML.
  const onPaste = (event: ClipboardEvent<HTMLSpanElement>) => {
    event.preventDefault();
    const text = event.clipboardData.getData("text/plain").replace(/\s+/g, " ");
    document.execCommand("insertText", false, text);
  };

  const reset = () => {
    for (const name of FIELD_NAMES) {
      const el = fields.current[name];
      if (el) el.textContent = FIELDS[name].initial ?? "";
    }
    if (dateField.current) dateField.current.textContent = todayLine();
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setStatus("Champs effacés.");
  };

  const copy = () => {
    const selectLetter = () => {
      const selection = window.getSelection();
      if (sheet.current && selection) {
        const range = document.createRange();
        range.selectNodeContents(sheet.current);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      setStatus("La lettre est sélectionnée : appuyez sur Ctrl+C (⌘+C sur Mac) pour la copier.");
    };
    if (!navigator.clipboard?.writeText) {
      selectLetter();
      return;
    }
    navigator.clipboard
      .writeText(letterText(values()))
      .then(() => setStatus("Texte copié. Collez-le dans un e-mail ou un formulaire."), selectLetter);
  };

  const exportPdf = async () => {
    if (exporting) return;
    setExporting(true);
    try {
      if (!kit.current) {
        setStatus("Préparation du PDF…");
        kit.current = await loadLetterKit();
      }
      const outcome = await deliver(buildLetterPdf(kit.current, values()));
      setStatus(outcome === "downloaded" ? "PDF téléchargé." : outcome === "shared" ? "PDF exporté." : "");
    } catch {
      setStatus("Le PDF n’a pas pu être créé. Vérifiez la connexion, puis réessayez.");
    } finally {
      setExporting(false);
    }
  };

  const editable = (
    key: string,
    ref: (el: HTMLSpanElement | null) => void,
    label: string,
    placeholder: string,
    className = "",
  ) => (
    <span
      key={key}
      ref={ref}
      contentEditable
      role="textbox"
      aria-label={label}
      data-placeholder={placeholder}
      onInput={onInput}
      onKeyDown={onKeyDown}
      onPaste={onPaste}
      className={`${FIELD_CLASS} ${className}`}
    />
  );
  const field = (name: FieldName, className?: string) =>
    editable(
      name,
      (el) => {
        fields.current[name] = el;
      },
      FIELDS[name].label,
      FIELDS[name].placeholder,
      className,
    );

  return (
    <main className="min-h-screen bg-paper-warm px-4 pb-14 pt-7 print:min-h-0 print:bg-white print:p-0">
      <div className="mx-auto mb-4 flex max-w-[794px] flex-wrap items-center justify-between gap-x-5 gap-y-3 print:hidden">
        <div className="flex min-w-0 flex-col gap-1">
          <p className="text-eyebrow uppercase text-ink-subtle">Lettre de motivation · {SENDER}</p>
          <p className="text-[13px] leading-normal text-ink-muted">
            Complétez les champs en pointillé, puis exportez la lettre en PDF ou copiez son texte
            pour un formulaire.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button type="button" onClick={reset} className={GHOST_CLASS}>
            Effacer les champs
          </button>
          <button type="button" onClick={copy} className={GHOST_CLASS}>
            Copier le texte
          </button>
          <button type="button" onClick={exportPdf} disabled={exporting} className={PRIMARY_CLASS}>
            <Icon name="download" className="h-3.5 w-3.5" />
            Exporter en PDF
          </button>
        </div>
        <p aria-live="polite" className="min-h-[1.2em] w-full text-[13px] text-ink-muted sm:text-right">
          {status}
        </p>
      </div>

      <article
        ref={sheet}
        lang="fr"
        className="mx-auto max-w-[794px] rounded-[2px] bg-white p-[clamp(24px,8vw,76px)] text-[15px] leading-[1.7] text-neutral-950 shadow-[0_1px_2px_rgb(0_0_0/0.04),0_18px_48px_rgb(0_0_0/0.08)] [font-feature-settings:normal] selection:bg-neutral-950 selection:text-white dark:shadow-[0_0_0_1px_rgb(255_255_255/0.06),0_24px_60px_rgb(0_0_0/0.55)] print:max-w-none print:shadow-none"
      >
        <header className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4 border-b border-stone-200 pb-6">
          <div className="min-w-0">
            <p className="text-[clamp(28px,4.4vw,36px)] font-light leading-none tracking-[-0.02em]">
              {LETTER.firstName} <em>{LETTER.lastName}</em>
            </p>
            <p className="mt-2.5 text-[10.5px] uppercase tracking-[0.22em] text-neutral-400">
              {LETTER.role}
            </p>
          </div>
          <address className="text-[13px] not-italic leading-[1.6] text-neutral-600 sm:text-right">
            {LETTER.sender.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </header>

        {/* Recipient: right-hand block, where a Swiss window envelope shows it */}
        <div className="mt-11 flex w-[min(280px,100%)] flex-col items-start gap-0.5 sm:ml-auto">
          {RECIPIENT_FIELDS.map((name) => field(name, "block min-w-[6ch] max-w-full"))}
        </div>

        <p className="mt-11 text-[14px] text-neutral-600">
          {editable(
            "date",
            (el) => {
              dateField.current = el;
            },
            "Lieu et date",
            DATE_PLACEHOLDER,
          )}
        </p>
        <p className="mt-7 font-semibold">
          {SUBJECT_LEAD}
          {field("position")}
        </p>
        <p className="mt-7">{field("salutation")}</p>
        <div className="mt-4 flex flex-col gap-3.5">
          {LETTER.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-justify [text-wrap:pretty]">
              {paragraph}
            </p>
          ))}
        </div>
        <p className="mt-3.5 text-justify [text-wrap:pretty]">{LETTER.closing}</p>
        <p className="mt-14">{SENDER}</p>
        <p className="mt-11 text-[12.5px] text-neutral-600">{LETTER.annexes}</p>
      </article>
    </main>
  );
}

type Delivery = "shared" | "downloaded" | "cancelled";

// Phones and tablets get the share sheet (Mail, "Enregistrer dans Fichiers",
// …); computers, and devices that cannot share files, get a download.
async function deliver(pdf: Blob): Promise<Delivery> {
  const file = new File([pdf], PDF_FILENAME, { type: "application/pdf" });
  const touch = window.matchMedia("(pointer: coarse)").matches;
  if (touch && navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({ files: [file] });
      return "shared";
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return "cancelled";
      // Otherwise (e.g. the tap expired while the fonts loaded) download instead.
    }
  }
  const url = URL.createObjectURL(pdf);
  const link = document.createElement("a");
  link.href = url;
  link.download = PDF_FILENAME;
  document.body.append(link);
  link.click();
  link.remove();
  // Revoking at once can cancel the download in Safari and Firefox.
  setTimeout(() => URL.revokeObjectURL(url), 60_000);
  return "downloaded";
}
