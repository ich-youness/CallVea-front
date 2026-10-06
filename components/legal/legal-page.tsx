import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Globe, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export type Block =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "notice"; text: string };

export type LegalDoc = {
  lang: "en" | "fr";
  title: string;
  description: string;
  badges: [string, string];
  meta: string[];
  intro: string;
  highlightsTitle: string;
  highlights: string[];
  sections: { title: string; blocks: Block[] }[];
  backLabel: string;
  alternate: { href: string; label: string };
};

// Inline formatting for content strings: **bold**, plus auto-linked emails and
// the two regulators' websites.
const TOKEN = /(\*\*[^*]+\*\*|[\w.+-]+@callvea\.com|priv\.gc\.ca|cai\.gouv\.qc\.ca)/g;
const LINK_CLASS = "text-indigo-400 hover:underline";

function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(TOKEN).map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="text-white">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.endsWith("@callvea.com")) {
          return (
            <a key={i} href={`mailto:${part}`} className={`${LINK_CLASS} font-mono`}>
              {part}
            </a>
          );
        }
        if (part === "priv.gc.ca" || part === "cai.gouv.qc.ca") {
          return (
            <a key={i} href={`https://www.${part}`} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
              {part}
            </a>
          );
        }
        return part;
      })}
    </>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return (
        <p>
          <Rich text={block.text} />
        </p>
      );
    case "list":
      return (
        <ul className="space-y-2.5 pl-1">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2.5 shrink-0" />
              <span>
                <Rich text={item} />
              </span>
            </li>
          ))}
        </ul>
      );
    case "notice":
      return (
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 text-zinc-200">
          <Rich text={block.text} />
        </div>
      );
  }
}

export function LegalPage({ doc, children }: { doc: LegalDoc; children?: ReactNode }) {
  return (
    <div lang={doc.lang} className="min-h-screen bg-zinc-950 text-zinc-300 pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-indigo-600/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>{doc.backLabel}</span>
          </Link>
          <Link
            href={doc.alternate.href}
            hrefLang={doc.lang === "en" ? "fr" : "en"}
            className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>{doc.alternate.label}</span>
          </Link>
        </div>

        <div className="space-y-4 border-b border-zinc-800 pb-8 mb-10">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="indigo" className="gap-1.5 py-1 px-3">
              <Shield className="w-3.5 h-3.5 text-indigo-400" />
              <span>{doc.badges[0]}</span>
            </Badge>
            <Badge variant="emerald" className="gap-1.5 py-1 px-3">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{doc.badges[1]}</span>
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">{doc.title}</h1>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-zinc-400">
            {doc.meta.map((m, i) => (
              <span key={m} className="flex items-center gap-4">
                {i > 0 && <span aria-hidden="true" className="hidden sm:inline">•</span>}
                {m}
              </span>
            ))}
          </div>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed pt-2">
            <Rich text={doc.intro} />
          </p>
        </div>

        <div className="mb-12 rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-6 backdrop-blur-md">
          <h2 className="text-sm font-semibold uppercase tracking-wider font-mono text-indigo-400 mb-4">
            {doc.highlightsTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {doc.highlights.map((h) => (
              <div key={h} className="flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                <div>
                  <Rich text={h} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-12 text-sm sm:text-base leading-relaxed">
          {doc.sections.map((section, i) => (
            <section key={section.title} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 shrink-0 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-indigo-400">
                  {i + 1}
                </span>
                {section.title}
              </h2>
              {section.blocks.map((block, j) => (
                <BlockView key={j} block={block} />
              ))}
            </section>
          ))}
          {children}
        </div>
      </div>
    </div>
  );
}
