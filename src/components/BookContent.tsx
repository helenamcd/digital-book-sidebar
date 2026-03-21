import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { chapterContents, chapters, hiddenChapterPrefixes } from "@/data/bookContent";
import ReferenceTooltip from "@/components/ReferenceTooltip";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { glossaryTerms } from "@/components/GlossaryContent";
import GlossaryTooltip from "@/components/GlossaryTooltip";

interface BookContentProps {
  activeChapter: string;
  onNavigate: (id: string) => void;
}

// Generate regex pattern that matches the term and its plural/singular variations (PT-BR)
const buildTermPattern = (term: string): string => {
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const words = escaped.split(/\s+/);
  const flexWords = words.map((w) => {
    // ão ↔ ões (implicação ↔ implicações)
    if (/ão$/i.test(w)) return `(?:${w}|${w.replace(/ão$/i, 'ões')})`;
    if (/ões$/i.test(w)) return `(?:${w}|${w.replace(/ões$/i, 'ão')})`;
    // ência ↔ ências, ese ↔ eses, etc — words ending in vowel+s or consonant
    if (/s$/i.test(w) && !/ss$/i.test(w)) return `(?:${w}|${w.slice(0, -1)})`;
    // singular → also match plural with "s"
    return `(?:${w}|${w}s)`;
  });
  return flexWords.join('\\s+');
};

// \b doesn't work with accented chars in JS, so use lookaround for word boundaries
const buildTermRegex = (term: string): RegExp => {
  const pattern = buildTermPattern(term);
  // Use lookbehind/lookahead that considers accented letters as word chars
  const wb_before = `(?<![a-zA-ZÀ-ÿ])`;
  const wb_after = `(?![a-zA-ZÀ-ÿ])`;
  return new RegExp(`${wb_before}${pattern}${wb_after}`, "gi");
};

const sortedGlossaryTerms = [...glossaryTerms].sort(
  (a, b) => b.term.length - a.term.length
);

let glossaryKeyCounter = 0;

const annotateWithGlossary = (nodes: React.ReactNode[]): React.ReactNode[] => {
  const result: React.ReactNode[] = [];

  for (const node of nodes) {
    // Recurse into React elements (e.g. <strong>, <em>, <code>)
    if (React.isValidElement(node) && node.props.children) {
      const children = Array.isArray(node.props.children)
        ? node.props.children
        : [node.props.children];
      const annotatedChildren = annotateWithGlossary(children);
      result.push(React.cloneElement(node, { ...node.props }, ...annotatedChildren));
      continue;
    }

    if (typeof node !== "string") {
      result.push(node);
      continue;
    }

    let text = node;
    const parts: React.ReactNode[] = [];
    const usedRanges: { start: number; end: number }[] = [];

    // Find all glossary term matches
    const matches: { start: number; end: number; term: typeof glossaryTerms[0]; matchedText: string }[] = [];
    for (const gt of sortedGlossaryTerms) {
      const regex = buildTermRegex(gt.term);
      let m;
      while ((m = regex.exec(text)) !== null) {
        const start = m.index;
        const end = start + m[0].length;
        // Check no overlap with already found matches
        if (!usedRanges.some(r => start < r.end && end > r.start)) {
          matches.push({ start, end, term: gt, matchedText: m[0] });
          usedRanges.push({ start, end });
        }
      }
    }

    if (matches.length === 0) {
      result.push(text);
      continue;
    }

    // Sort by position
    matches.sort((a, b) => a.start - b.start);

    let lastIndex = 0;
    for (const match of matches) {
      if (match.start > lastIndex) {
        parts.push(text.slice(lastIndex, match.start));
      }
      parts.push(
        <GlossaryTooltip key={`gt-${glossaryKeyCounter++}`} term={match.term.term} definition={match.term.definition}>
          {match.matchedText}
        </GlossaryTooltip>
      );
      lastIndex = match.end;
    }
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
    result.push(...parts);
  }

  return result;
};

const renderInlineMarkdown = (text: string) => {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Check for reference tooltip pattern first: {{ref:key|label|reference}}
    const refMatch = remaining.match(/\{\{ref:([^|]+)\|([^|]+)\|([^}]+)\}\}/);
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    const italicMatch = remaining.match(/\*(.+?)\*/);
    const codeMatch = remaining.match(/`(.+?)`/);

    const matches = [
      refMatch ? { type: 'ref', match: refMatch, index: refMatch.index! } : null,
      boldMatch ? { type: 'bold', match: boldMatch, index: boldMatch.index! } : null,
      italicMatch && (!boldMatch || italicMatch.index! < boldMatch.index!) ? { type: 'italic', match: italicMatch, index: italicMatch.index! } : null,
      codeMatch ? { type: 'code', match: codeMatch, index: codeMatch.index! } : null,
    ].filter(Boolean).sort((a, b) => a!.index - b!.index);

    if (matches.length === 0) {
      parts.push(remaining);
      break;
    }

    const first = matches[0]!;
    if (first.index > 0) {
      parts.push(remaining.slice(0, first.index));
    }

    if (first.type === 'ref') {
      const label = first.match![2];
      const reference = first.match![3];
      parts.push(
        <ReferenceTooltip key={key++} label={label} reference={reference} />
      );
      remaining = remaining.slice(first.index + first.match![0].length);
    } else if (first.type === 'bold') {
      parts.push(<strong key={key++} className="font-bold">{first.match![1]}</strong>);
      remaining = remaining.slice(first.index + first.match![0].length);
    } else if (first.type === 'italic') {
      parts.push(<em key={key++} className="italic">{first.match![1]}</em>);
      remaining = remaining.slice(first.index + first.match![0].length);
    } else if (first.type === 'code') {
      parts.push(
        <code key={key++} className="bg-muted px-1.5 py-0.5 rounded text-[0.85em] font-mono text-accent">
          {first.match![1]}
        </code>
      );
      remaining = remaining.slice(first.index + first.match![0].length);
    }
  }

  // After inline markdown, annotate string parts with glossary tooltips
  return annotateWithGlossary(parts);
};

// Build flat list of all navigable pages (chapters + sections)
const allPages = chapters
  .filter((ch) => !hiddenChapterPrefixes.some((prefix) => ch.id.startsWith(prefix)))
  .flatMap((ch) => {
    const pages = [{ id: ch.id, title: ch.title }];
    if (ch.sections) {
      pages.push(...ch.sections.map((s) => ({ id: s.id, title: s.title })));
    }
    return pages;
  });

// Compute standardized subtitle from chapter hierarchy
const computeSubtitle = (pageId: string): string | null => {
  if (["capa", "prefacio", "glossario"].includes(pageId)) return null;

  for (const ch of chapters) {
    const chNumMatch = ch.title.match(/Capítulo\s+(\d+)/);
    if (!chNumMatch) continue;
    const chNum = chNumMatch[1];
    const chName = ch.title.replace(/^Capítulo\s+\d+\s*-\s*/, "").trim();

    if (ch.id === pageId) {
      return `Capítulo ${chNum}`;
    }

    if (ch.sections) {
      const secIndex = ch.sections.findIndex((s) => s.id === pageId);
      if (secIndex !== -1) {
        return `${chNum}.${secIndex + 1} — ${chName.toUpperCase()}`;
      }
    }
  }
  return null;
};

const BookContent = ({ activeChapter, onNavigate }: BookContentProps) => {
  const content = chapterContents[activeChapter];
  const currentIndex = allPages.findIndex((p) => p.id === activeChapter);
  const prevChapter = currentIndex > 0 ? allPages[currentIndex - 1] : null;
  const nextChapter = currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null;

  if (!content) return null;

  const computedSubtitle = computeSubtitle(activeChapter);
  const subtitle = computedSubtitle || content.subtitle;

  return (
    <main className="flex-1 min-h-screen overflow-y-auto scrollbar-thin bg-background">
      <div className="max-w-2xl mx-auto px-6 md:px-12 py-12 md:py-20">
        {/* Chapter header */}
        {subtitle && (
          <p className="text-xs font-sans-book font-semibold tracking-[0.25em] uppercase text-accent mb-3">
            {subtitle}
          </p>
        )}
        <h2 className="font-serif-book text-3xl md:text-4xl font-bold text-[hsl(var(--book-heading))] mb-2">
          {content.title}
        </h2>
        <div className="w-16 h-0.5 bg-accent mb-10" />

        {/* Paragraphs */}
        <article className="space-y-5">
          {content.paragraphs.map((p, i) => {
            // Custom diagram for prefácio process
            if (p === ":::diagrama-processo:::") {
              const phases = [
                { phase: "Fase 1", title: "Leitura e compreensão do material original", desc: "Docentes leram e analisaram Genesereth & Kao (2017)", color: "human", arrow: "material original estruturado" },
                { phase: "Fase 2", title: "Resumo e fusão de capítulos via IA", desc: "Capítulos submetidos à IA para condensação e reorganização", color: "ia", arrow: "rascunho preliminar" },
                { phase: "Fase 3", title: "Revisão por docente especialista", desc: "Verificação de rigor formal, nível e estrutura pedagógica", color: "human", arrow: "estrutura aprovada" },
                { phase: "Fase 4", title: "Expansão: exemplos de IA e Ciência de Dados", desc: "Docentes especificam conexões, exemplos Python, exercícios", color: "human", arrow: "especificação de conteúdo" },
                { phase: "Fase 5", title: "Escrita dos capítulos pela IA", desc: "Produção de texto, tabelas, caixas, exercícios e gabarito", color: "ia", arrow: "rascunho completo" },
                { phase: "Fase 6", title: "Revisão técnica e pedagógica", desc: "Correção iterativa: rigor, clareza, coerência entre capítulos", color: "collab", arrow: "material validado" },
                { phase: "Fase 7", title: "Aplicação em sala de aula", desc: "Capítulos usados em graduação; coleta de feedback discente", color: "human", arrow: "feedback estruturado" },
                { phase: "Fase 8", title: "Revisão final com auxílio de IA", desc: "Incorporação do feedback; reescrita e ajuste de exercícios", color: "collab", arrow: null },
              ];
              const colorMap = {
                human: { bg: "bg-green-50", border: "border-l-green-500", label: "border-green-500 bg-green-100 text-green-800" },
                ia: { bg: "bg-orange-50", border: "border-l-orange-400", label: "border-orange-400 bg-orange-100 text-orange-800" },
                collab: { bg: "bg-blue-50", border: "border-l-blue-400", label: "border-blue-400 bg-blue-100 text-blue-800" },
              };
              return (
                <div key={i} className="my-8 space-y-0">
                  {/* Legend */}
                  <div className="flex flex-wrap gap-4 mb-6 text-xs font-sans-book">
                    <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-green-500" /> Conduzido por humano docente</span>
                    <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-orange-400" /> Conduzido por IA</span>
                    <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-blue-400" /> Colaboração humano-IA</span>
                  </div>
                  {phases.map((ph, pi) => (
                    <div key={pi}>
                      <div className={`${colorMap[ph.color].bg} ${colorMap[ph.color].border} border-l-4 rounded-r-lg px-5 py-3`}>
                        <p className="font-serif-book text-sm font-semibold text-[hsl(var(--book-heading))]">
                          <span className="text-muted-foreground">{ph.phase}</span>{"  "}{ph.title}
                        </p>
                        <p className="font-serif-book text-xs italic text-muted-foreground mt-0.5">{ph.desc}</p>
                      </div>
                      {ph.arrow && (
                        <div className="flex items-center gap-2 pl-6 py-1.5 text-xs text-muted-foreground/60 font-serif-book">
                          <span>↓</span> <span className="italic">{ph.arrow}</span>
                        </div>
                      )}
                      {!ph.arrow && pi < phases.length - 1 && (
                        <div className="pl-6 py-1.5 text-xs text-muted-foreground/60">↓</div>
                      )}
                    </div>
                  ))}
                  {/* Final result */}
                  <div className="pl-6 py-1.5 text-xs text-muted-foreground/60">↓</div>
                  <div className="bg-green-50 border-l-4 border-l-green-600 rounded-r-lg px-5 py-3 border border-green-200">
                    <p className="font-serif-book text-sm font-bold text-green-800">✓ Livro Final</p>
                    <p className="font-serif-book text-xs italic text-green-700 mt-0.5">Lógica para IA e Ciência de Dados — versão revisada, testada em sala e validada pedagogicamente</p>
                  </div>
                </div>
              );
            }

            // Download PDF button
            if (p === ":::download-pdf:::") {
              return (
                <div key={i} className="flex justify-center mt-8 mb-4">
                  <a
                    href="/logica_ia_cd_v5.pdf"
                    download
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg, #1a5ccc, #00b4ff)",
                      color: "#fff",
                      boxShadow: "0 4px 20px rgba(0,180,255,0.3)",
                      letterSpacing: "2px",
                    }}
                  >
                    Download do Livro em PDF ↓
                  </a>
                </div>
              );
            }

            // Code block
            if (p.startsWith("```")) {
              // Remove opening/closing ``` and split lines (handle both real \n and literal \\n)
              let code = p.replace(/^```/, "").replace(/```$/, "");
              // Strip leading/trailing literal \\n and real \n
              code = code.replace(/^\\n/, "").replace(/\\n$/, "").replace(/^\n/, "").replace(/\n$/, "");
              const lines = code.includes("\n") ? code.split("\n") : code.split("\\n");

              // Detect markdown table inside code block
              const isTable = lines.some((l) => l.trim().startsWith("|") && l.trim().endsWith("|"));
              if (isTable) {
                const isSeparator = (line: string) => /^\|[\s\-:|]+\|$/.test(line.trim());
                const tableLines = lines.filter((l) => l.trim().startsWith("|") && l.trim().endsWith("|") && !isSeparator(l));
                const parseRow = (line: string) =>
                  line.split("|").slice(1, -1).map((c) => c.trim());
                const headers = parseRow(tableLines[0]);
                const dataRows = tableLines
                  .slice(1)
                  .map(parseRow);
                return (
                  <div key={i} className="my-4 inline-block border border-foreground/40">
                    <table className="border-collapse">
                      <thead>
                        <tr className="border-b-2 border-foreground/40">
                          {headers.map((h, hi) => (
                            <th key={hi} className="px-5 py-2 font-mono text-sm font-semibold text-center border-r border-foreground/40 last:border-r-0">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {dataRows.map((row, ri) => (
                          <tr key={ri} className="border-b border-foreground/20 last:border-b-0">
                            {row.map((cell, ci) => (
                              <td key={ci} className="px-5 py-1.5 font-mono text-sm text-center border-r border-foreground/40 last:border-r-0">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }

              return (
                <pre
                  key={i}
                  className="bg-muted rounded-lg p-4 overflow-x-auto font-mono text-xs md:text-sm text-[hsl(var(--book-text))] leading-relaxed border border-border"
                >
                  {lines.map((line, li) => (
                    <div key={li}>{line}</div>
                  ))}
                </pre>
              );
            }

            // Heading #### (smallest)
            if (p.startsWith("####")) {
              return (
                <h4
                  key={i}
                  className="font-serif-book text-base md:text-lg font-semibold text-[hsl(var(--book-heading))] mt-6 mb-1.5"
                >
                  {p.replace(/^####\s*/, "")}
                </h4>
              );
            }

            // Heading ### 
            if (p.startsWith("###")) {
              return (
                <h3
                  key={i}
                  className="font-serif-book text-lg md:text-xl font-bold text-[hsl(var(--book-heading))] mt-8 mb-2"
                >
                  {p.replace(/^###\s*/, "")}
                </h3>
              );
            }

            // Heading ## (bigger)
            if (p.startsWith("##") && !p.startsWith("###")) {
              return (
                <h2
                  key={i}
                  className="font-serif-book text-xl md:text-2xl font-bold text-[hsl(var(--book-heading))] mt-10 mb-3"
                >
                  {p.replace(/^##\s*/, "")}
                </h2>
              );
            }

            // Markdown table in a paragraph (starts with |)
            if (p.trimStart().startsWith("|")) {
              // Normalize: handle both real \n and literal \\n
              const raw = p.includes("\n") ? p : p.replace(/\\n/g, "\n");
              const allLines = raw.split("\n").map((l) => l.trim()).filter(Boolean);
              const isSeparator = (line: string) => /^\|[\s\-:|]+\|$/.test(line);
              const dataLines = allLines.filter((l) => l.startsWith("|") && l.endsWith("|") && !isSeparator(l));
              const parseRow = (line: string) =>
                line.split("|").slice(1, -1).map((c) => c.trim());

              if (dataLines.length > 0) {
                const headers = parseRow(dataLines[0]);
                const rows = dataLines.slice(1).map(parseRow);
                const isSingleCol = headers.length === 1;

                // Single-column table = callout/info box
                if (isSingleCol && rows.length === 0) {
                  // Header-only callout (content in the header itself, often with <br/>)
                  const content = headers[0];
                  const htmlContent = content.replace(/<br\s*\/?>/gi, "\n");
                  const lines = htmlContent.split("\n");
                  return (
                    <div key={i} className="my-6 border-l-4 border-accent bg-accent/5 rounded-r-lg px-5 py-4">
                      {lines.map((line, li) => (
                        <p key={li} className={`font-serif-book text-sm md:text-[0.95rem] leading-[1.85] text-[hsl(var(--book-text))] ${li > 0 ? "mt-1" : ""}`}>
                          {renderInlineMarkdown(line)}
                        </p>
                      ))}
                    </div>
                  );
                }

                if (isSingleCol && rows.length > 0) {
                  // Single-column with header + body rows = callout box
                  return (
                    <div key={i} className="my-6 border-l-4 border-accent bg-accent/5 rounded-r-lg px-5 py-4">
                      <p className="font-serif-book text-sm md:text-[0.95rem] leading-[1.85] text-[hsl(var(--book-text))] font-semibold mb-2">
                        {renderInlineMarkdown(headers[0])}
                      </p>
                      {rows.map((row, ri) => {
                        const cellContent = row[0] || "";
                        const htmlContent = cellContent.replace(/<br\s*\/?>/gi, "\n");
                        const lines = htmlContent.split("\n");
                        return lines.map((line, li) => (
                          <p key={`${ri}-${li}`} className="font-serif-book text-sm md:text-[0.95rem] leading-[1.85] text-[hsl(var(--book-text))]">
                            {renderInlineMarkdown(line)}
                          </p>
                        ));
                      })}
                    </div>
                  );
                }

                // Multi-column table
                return (
                  <div key={i} className="my-4 overflow-x-auto inline-block border border-foreground/40">
                    <table className="border-collapse">
                      <thead>
                        <tr className="border-b-2 border-foreground/40">
                          {headers.map((h, hi) => (
                            <th key={hi} className="px-5 py-2 font-serif-book text-sm font-semibold text-left border-r border-foreground/40 last:border-r-0">
                              {renderInlineMarkdown(h)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {rows.map((row, ri) => (
                          <tr key={ri} className="border-b border-foreground/20 last:border-b-0">
                            {row.map((cell, ci) => (
                              <td key={ci} className="px-5 py-1.5 font-serif-book text-sm text-left border-r border-foreground/40 last:border-r-0">
                                {renderInlineMarkdown(cell)}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }
            }

            // Ordered list items (lines starting with number.)
            if (/^\d+\.\s/.test(p) || p.includes("\n1.") || p.includes("\n2.")) {
              const lines = p.split("\n").filter(Boolean);
              return (
                <ol key={i} className="list-none space-y-3 font-serif-book text-sm md:text-[0.95rem] text-[hsl(var(--book-text))] leading-[1.8] pl-0">
                  {lines.map((line, li) => {
                    const numMatch = line.match(/^(\d+)\.\s*(.*)/);
                    if (!numMatch) return <li key={li}>{renderInlineMarkdown(line)}</li>;
                    return (
                      <li key={li} className="flex gap-2">
                        <span className="font-bold text-accent shrink-0">{numMatch[1]}.</span>
                        <span>{renderInlineMarkdown(numMatch[2])}</span>
                      </li>
                    );
                  })}
                </ol>
              );
            }

            // List items (lines starting with -)
            if (p.includes("\n- ") || p.startsWith("- ")) {
              const lines = p.split("\n");
              return (
                <ul key={i} className="list-disc list-inside space-y-1.5 font-serif-book text-sm md:text-[0.95rem] text-[hsl(var(--book-text))] leading-[1.8] pl-2">
                  {lines.map((line, li) => {
                    const content = line.replace(/^- /, "");
                    return (
                      <li key={li}>{renderInlineMarkdown(content)}</li>
                    );
                  })}
                </ul>
              );
            }

            const isQuote = p.startsWith('"') && p.includes("—");
            if (isQuote) {
              return (
                <blockquote
                  key={i}
                  className="border-l-4 border-accent pl-6 py-2 italic font-serif-book text-muted-foreground text-base leading-relaxed"
                >
                  {p}
                </blockquote>
              );
            }

            const isFinalWord = p === "Fim.";
            return (
              <p
                key={i}
                className={`
                  font-serif-book leading-[1.85] text-[hsl(var(--book-text))]
                  ${isFinalWord ? "text-center text-2xl font-bold mt-12 text-accent" : "text-sm md:text-[0.95rem]"}
                  ${i === 0 ? "first-letter:text-4xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-accent first-letter:leading-none" : ""}
                `}
              >
                {renderInlineMarkdown(p)}
              </p>
            );
          })}
        </article>

        {/* Table */}
        {content.table && (
          <div className="my-8 overflow-x-auto border border-border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/60">
                  {content.table.headers.map((h, i) => (
                    <TableHead key={i} className="font-mono text-xs font-semibold text-center whitespace-nowrap">
                      {h}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {content.table.rows.map((row, ri) => (
                  <TableRow key={ri}>
                    {row.map((cell, ci) => (
                      <TableCell key={ci} className="font-mono text-xs text-center py-2">
                        {cell}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        {/* Paragraphs after table */}
        {content.paragraphs_after_table && (
          <article className="space-y-5">
            {content.paragraphs_after_table.map((p, i) => (
              <p
                key={`pat-${i}`}
                className="font-serif-book leading-[1.85] text-[hsl(var(--book-text))] text-sm md:text-[0.95rem]"
              >
                {renderInlineMarkdown(p)}
              </p>
            ))}
          </article>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          {prevChapter ? (
            <button
              onClick={() => onNavigate(prevChapter.id)}
              className="flex items-center gap-2 text-sm font-sans-book text-muted-foreground hover:text-accent transition-colors group"
            >
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <span className="block text-[10px] uppercase tracking-widest">Anterior</span>
                <span className="block font-medium text-foreground">{prevChapter.title}</span>
              </div>
            </button>
          ) : <div />}

          {nextChapter ? (
            <button
              onClick={() => onNavigate(nextChapter.id)}
              className="flex items-center gap-2 text-sm font-sans-book text-muted-foreground hover:text-accent transition-colors group text-right"
            >
              <div>
                <span className="block text-[10px] uppercase tracking-widest">Próximo</span>
                <span className="block font-medium text-foreground">{nextChapter.title}</span>
              </div>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          ) : <div />}
        </div>
      </div>
    </main>
  );
};

export default BookContent;
