import type { Metadata } from "next";
import LetterEditor from "@/components/LetterEditor";
import { SENDER } from "@/lib/letter";

// Fortuna's own tool for her applications: not linked from the CV and kept
// out of search engines.
export const metadata: Metadata = {
  title: `Lettre de motivation — ${SENDER}`,
  robots: { index: false, follow: false },
};

export default function LetterPage() {
  return <LetterEditor />;
}
