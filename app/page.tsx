import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PrintButton from "@/components/PrintButton";
import PrintLayout from "@/components/PrintLayout";
import ThemeToggle from "@/components/ThemeToggle";
import { LocaleProvider } from "@/components/LocaleProvider";
import { Analytics } from "@vercel/analytics/next";

export default function Page() {
  return (
    <LocaleProvider>
      <main className="relative min-h-screen bg-paper print:min-h-0">
        <div className="print:hidden">
          <Nav />
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Education />
          <Contact />
          <Footer />
        </div>
        <PrintLayout />
        <div className="print:hidden fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2">
          <ThemeToggle />
          <PrintButton />
        </div>
      </main>
      {/* Vercel Web Analytics (cookieless) on the CV only, so Fortuna's own
          visits to /lettre don't count as visitors. */}
      <Analytics />
    </LocaleProvider>
  );
}
