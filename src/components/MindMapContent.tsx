import React, { useState, useCallback, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import { chapters, hiddenChapterPrefixes } from "@/data/bookContent";

interface MindMapContentProps {
  onNavigate: (id: string) => void;
}

interface MapNode {
  id: string;
  label: string;
  children?: MapNode[];
}

/* ── Color palette per branch ─────────────────────────────────── */
const BRANCH_COLORS: Record<string, { bg: string; text: string; line: string; badge: string }> = {
  linguagens:   { bg: "hsl(220,55%,95%)",  text: "hsl(220,55%,35%)",  line: "hsl(220,55%,75%)",  badge: "hsl(220,55%,50%)" },
  semantica:    { bg: "hsl(28,80%,94%)",    text: "hsl(28,70%,32%)",   line: "hsl(28,70%,75%)",   badge: "hsl(28,80%,52%)" },
  metodos:      { bg: "hsl(340,50%,94%)",   text: "hsl(340,50%,32%)",  line: "hsl(340,50%,75%)",  badge: "hsl(340,55%,50%)" },
  limites:      { bg: "hsl(260,45%,94%)",   text: "hsl(260,45%,35%)",  line: "hsl(260,45%,75%)",  badge: "hsl(260,45%,50%)" },
};

const ROOT_STYLE = { bg: "hsl(var(--accent))", text: "hsl(var(--accent-foreground))" };

/* ── Mind map data ────────────────────────────────────────────── */
const mindMapData: MapNode = {
  id: "root",
  label: "Lógica Aplicada\nà Ciência de Dados",
  children: [
    {
      id: "linguagens",
      label: "Linguagens\nLógicas",
      children: [
        {
          id: "lp", label: "Lógica\nProposicional",
          children: [
            { id: "lp-sint", label: "Sintaxe" },
            { id: "lp-sem", label: "Semântica" },
            { id: "lp-aval", label: "Avaliação" },
            { id: "lp-sat", label: "Satisfatibilidade" },
          ],
        },
        {
          id: "lpo", label: "Lógica de\nPrimeira Ordem",
          children: [
            { id: "lpo-sint", label: "Sintaxe LPO" },
            { id: "lpo-quant", label: "Quantificadores" },
            { id: "lpo-interp", label: "Interpretações" },
            { id: "lpo-igual", label: "Igualdade" },
            { id: "lpo-arit", label: "Aritmética" },
          ],
        },
      ],
    },
    {
      id: "semantica",
      label: "Semântica\ne Modelos",
      children: [
        {
          id: "tm", label: "Teoria de\nModelos",
          children: [
            { id: "tm-herb", label: "Herbrand" },
            { id: "tm-val", label: "Validade" },
            { id: "tm-conseq", label: "Consequência\nLógica" },
          ],
        },
        {
          id: "pr", label: "Propriedades\ne Relações",
          children: [
            { id: "pr-equiv", label: "Equivalência\nLógica" },
            { id: "pr-consist", label: "Consistência" },
            { id: "pr-arit", label: "Aritmética\nFormal" },
          ],
        },
      ],
    },
    {
      id: "metodos",
      label: "Métodos de\nRaciocínio",
      children: [
        {
          id: "pf", label: "Provas\nFormais",
          children: [
            { id: "pf-dn", label: "Dedução\nNatural" },
            { id: "pf-tab", label: "Tableaux" },
            { id: "pf-ax", label: "Sistemas de\nAxiomas" },
          ],
        },
        {
          id: "res", label: "Resolução",
          children: [
            { id: "res-cl", label: "Forma\nClausal" },
            { id: "res-unif", label: "Unificação" },
            { id: "res-sld", label: "Resolução\nSLD" },
          ],
        },
        {
          id: "gen", label: "Generalização",
          children: [
            { id: "gen-lin", label: "Linear" },
            { id: "gen-arv", label: "Em Árvore" },
            { id: "gen-est", label: "Estrutural" },
            { id: "gen-multi", label: "Multidimensional" },
          ],
        },
      ],
    },
    {
      id: "limites",
      label: "Limites e\nPerspectivas",
      children: [
        {
          id: "indec", label: "Indecidibilidade",
          children: [
            { id: "indec-par", label: "Problema\nda Parada" },
            { id: "indec-god", label: "Teorema\nde Gödel" },
            { id: "indec-comp", label: "Complexidade\nComputacional" },
          ],
        },
        {
          id: "iaml", label: "Lógica e\nIA / ML",
          children: [
            { id: "iaml-rac", label: "Raciocínio\nem IA" },
            { id: "iaml-ml", label: "Lógica\ne ML" },
            { id: "iaml-prog", label: "Programação\nLógica" },
          ],
        },
      ],
    },
  ],
};

/* ── Helpers ──────────────────────────────────────────────────── */
function getBranchKey(nodeId: string): string {
  const branches = Object.keys(BRANCH_COLORS);
  for (const b of branches) if (nodeId === b || nodeId.startsWith(b)) return b;
  // walk tree to find branch
  const find = (node: MapNode, branch: string): boolean => {
    if (node.id === nodeId) return true;
    return node.children?.some((c) => find(c, branch)) ?? false;
  };
  for (const child of mindMapData.children ?? []) {
    const key = child.id;
    if (branches.includes(key) && find(child, key)) return key;
  }
  return "linguagens";
}

function collectIds(node: MapNode): string[] {
  const ids = [node.id];
  node.children?.forEach((c) => ids.push(...collectIds(c)));
  return ids;
}

/* ── Default node→chapter mappings ─────────────────────────── */
const DEFAULT_LINKS: Record<string, string> = {
  // Linguagens Lógicas
  linguagens: "intro",
  lp: "cap2",
  "lp-sint": "cap1-sec1",
  "lp-sem": "cap1-sec2",
  "lp-aval": "cap1-sec3",
  "lp-sat": "cap1-sec4",
  lpo: "cap7",
  "lpo-sint": "cap7-sec2",
  "lpo-quant": "cap4-sec2",
  "lpo-interp": "cap7-sec3",
  "lpo-igual": "cap7-sec6",
  "lpo-arit": "cap7-sec5",
  // Semântica e Modelos
  semantica: "cap5",
  tm: "cap5",
  "tm-herb": "cap4-sec4",
  "tm-val": "cap5-sec1",
  "tm-conseq": "cap2-sec3",
  pr: "cap2-sec1",
  "pr-equiv": "cap2-sec2",
  "pr-consist": "cap2-sec4",
  "pr-arit": "cap7-sec5",
  // Métodos de Raciocínio
  metodos: "cap3",
  pf: "cap3",
  "pf-dn": "cap3-sec3",
  "pf-tab": "cap5-sec1",
  "pf-ax": "cap3-sec1",
  res: "cap6",
  "res-cl": "cap6-sec1",
  "res-unif": "cap6-sec5",
  "res-sld": "cap6-sec6",
  gen: "cap8",
  "gen-lin": "cap8-sec3",
  "gen-arv": "cap8-sec4",
  "gen-est": "cap8-sec5",
  "gen-multi": "cap8-sec6",
  // Limites e Perspectivas
  limites: "cap9",
  indec: "cap9-sec6",
  "indec-par": "cap9-sec6",
  "indec-god": "cap9-sec6",
  "indec-comp": "cap9-sec6",
  iaml: "cap9-sec4",
  "iaml-rac": "cap9-sec4",
  "iaml-ml": "cap9-sec5",
  "iaml-prog": "cap6-sec9",
};

/* ── Available chapters for linking ───────────────────────────── */
const linkableChapters = chapters
  .filter((ch) => !hiddenChapterPrefixes.some((p) => ch.id.startsWith(p)))
  .flatMap((ch) => {
    const items = [{ id: ch.id, title: ch.title }];
    ch.sections?.forEach((s) => items.push({ id: s.id, title: s.title }));
    return items;
  });

/* ── Navigation pages ─────────────────────────────────────────── */
const allPages = chapters
  .filter((ch) => !hiddenChapterPrefixes.some((prefix) => ch.id.startsWith(prefix)))
  .flatMap((ch) => {
    const pages = [{ id: ch.id, title: ch.title }];
    if (ch.sections) pages.push(...ch.sections.map((s) => ({ id: s.id, title: s.title })));
    return pages;
  });

/* ── TreeNode ─────────────────────────────────────────────────── */
interface TreeNodeProps {
  node: MapNode;
  depth: number;
  expanded: Set<string>;
  onToggle: (id: string) => void;
  linkedChapters: Record<string, string>;
  onLinkChapter: (nodeId: string, chapterId: string) => void;
  onUnlinkChapter: (nodeId: string) => void;
  onNavigate: (id: string) => void;
}

const TreeNode = React.memo(({ node, depth, expanded, onToggle, linkedChapters, onLinkChapter, onUnlinkChapter, onNavigate }: TreeNodeProps) => {
  const isRoot = depth === 0;
  const hasChildren = !!(node.children && node.children.length > 0);
  const isOpen = expanded.has(node.id);
  const branchKey = getBranchKey(node.id);
  const colors = BRANCH_COLORS[branchKey] ?? BRANCH_COLORS.linguagens;
  const linkedId = linkedChapters[node.id];
  const linkedChapter = linkedId ? linkableChapters.find((c) => c.id === linkedId) : null;
  const lines = node.label.split("\n");

  const [popoverOpen, setPopoverOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = search
    ? linkableChapters.filter((c) => c.title.toLowerCase().includes(search.toLowerCase()))
    : linkableChapters;

  const handleNodeClick = () => {
    if (hasChildren) onToggle(node.id);
  };

  const handleNodeDoubleClick = () => {
    if (!isRoot && linkedId) {
      onNavigate(linkedId);
    }
  };

  return (
    <div className="flex items-center">
      {/* ── Node pill + link button ──────────────── */}
      <div className="flex flex-col items-start shrink-0">
        <div className="flex items-center gap-1.5">
          <button
            onClick={handleNodeClick}
            onDoubleClick={handleNodeDoubleClick}
            className={`relative shrink-0 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl ${!isRoot && linkedId ? "cursor-pointer" : ""}`}
            title={!isRoot && linkedChapter ? `Clique duplo para ir a: ${linkedChapter.title}` : undefined}
          >
            <div
              className={`
                px-3 py-2 rounded-xl text-center whitespace-nowrap select-none transition-all duration-200
                ${isRoot
                  ? "px-5 py-3 rounded-2xl shadow-lg font-bold text-sm"
                  : depth === 1
                    ? "shadow-md font-semibold text-xs"
                    : hasChildren
                      ? "shadow-sm font-medium text-[11px]"
                      : "shadow-sm font-normal text-[11px] border"
                }
              `}
              style={{
                backgroundColor: isRoot ? ROOT_STYLE.bg : colors.bg,
                color: isRoot ? ROOT_STYLE.text : colors.text,
                borderColor: !isRoot && !hasChildren ? colors.line : "transparent",
              }}
            >
              {lines.map((l, i) => (
                <div key={i} className={i > 0 ? "-mt-0.5" : ""}>{l}</div>
              ))}
              {hasChildren && (
                <span
                  className="absolute -right-1.5 -top-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-sm"
                  style={{ backgroundColor: isRoot ? "hsl(var(--accent))" : colors.badge }}
                >
                  {isOpen ? "−" : "+"}
                </span>
              )}
            </div>
          </button>

        </div>
      </div>

      {/* ── Children branch ────────────────────── */}
      {hasChildren && isOpen && (
        <>
          {/* Horizontal connector from parent to the fork */}
          <div className="shrink-0" style={{ width: 28, height: 2, backgroundColor: colors.line, opacity: 0.5 }} />

          {/* Children stacked vertically — border-left IS the vertical rail */}
          <div
            className="flex flex-col"
            style={{
              borderLeft: node.children!.length > 1 ? `2px solid ${colors.line}` : "none",
              borderColor: colors.line,
              opacity: 1,
              gap: 0,
            }}
          >
            {node.children!.map((child) => (
              <div key={child.id} className="flex items-center" style={{ padding: "4px 0" }}>
                {/* Horizontal tick from vertical rail to child */}
                <div className="shrink-0" style={{ width: 16, height: 2, backgroundColor: colors.line, opacity: 0.5 }} />
                <TreeNode
                  node={child}
                  depth={depth + 1}
                  expanded={expanded}
                  onToggle={onToggle}
                  linkedChapters={linkedChapters}
                  onLinkChapter={onLinkChapter}
                  onUnlinkChapter={onUnlinkChapter}
                  onNavigate={onNavigate}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
});

TreeNode.displayName = "TreeNode";

/* ── Main component ──────────────────────────────────────────── */
const MindMapContent = ({ onNavigate }: MindMapContentProps) => {
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set(["root", "linguagens", "semantica", "metodos", "limites"]));
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, panX: 0, panY: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Linked chapters persisted in localStorage
  const [linkedChapters, setLinkedChapters] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem("mindmap-linked-chapters");
      return saved ? { ...DEFAULT_LINKS, ...JSON.parse(saved) } : { ...DEFAULT_LINKS };
    } catch { return { ...DEFAULT_LINKS }; }
  });

  useEffect(() => {
    localStorage.setItem("mindmap-linked-chapters", JSON.stringify(linkedChapters));
  }, [linkedChapters]);

  const handleLinkChapter = useCallback((nodeId: string, chapterId: string) => {
    setLinkedChapters((prev) => ({ ...prev, [nodeId]: chapterId }));
  }, []);

  const handleUnlinkChapter = useCallback((nodeId: string) => {
    setLinkedChapters((prev) => {
      const next = { ...prev };
      delete next[nodeId];
      return next;
    });
  }, []);

  const toggleNode = useCallback((id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }, []);

  const expandAll = useCallback(() => {
    setExpanded(new Set(collectIds(mindMapData)));
  }, []);

  const collapseAll = useCallback(() => {
    setExpanded(new Set(["root"]));
  }, []);

  const resetView = useCallback(() => { setZoom(1); setPan({ x: 0, y: 0 }); }, []);

  // Mouse pan
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button !== 0) return;
    setDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY, panX: pan.x, panY: pan.y };
  }, [pan]);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragging) return;
    setPan({ x: dragStart.current.panX + e.clientX - dragStart.current.x, y: dragStart.current.panY + e.clientY - dragStart.current.y });
  }, [dragging]);

  const onMouseUp = useCallback(() => setDragging(false), []);

  // Wheel zoom
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        setZoom((z) => Math.max(0.3, Math.min(2.5, z - e.deltaY * 0.002)));
      }
    };
    el.addEventListener("wheel", handler, { passive: false });
    return () => el.removeEventListener("wheel", handler);
  }, []);

  // Touch pan
  const touchStart = useRef({ x: 0, y: 0, panX: 0, panY: 0 });
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 1) touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY, panX: pan.x, panY: pan.y };
  }, [pan]);
  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 1) setPan({ x: touchStart.current.panX + e.touches[0].clientX - touchStart.current.x, y: touchStart.current.panY + e.touches[0].clientY - touchStart.current.y });
  }, []);

  // Nav
  const currentIndex = allPages.findIndex((p) => p.id === "mapa-mental");
  const prevChapter = currentIndex > 0 ? allPages[currentIndex - 1] : null;
  const nextChapter = currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null;

  return (
    <main className="flex-1 min-h-screen overflow-y-auto scrollbar-thin bg-background">
      <div className="max-w-full mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-6">
          <p className="text-xs font-sans-book font-semibold tracking-[0.25em] uppercase text-accent mb-2">Visão Geral</p>
          <h2 className="font-serif-book text-2xl md:text-3xl font-bold text-[hsl(var(--book-heading))] mb-2">Mapa Conceitual do Livro</h2>
          <div className="w-16 h-0.5 bg-accent mb-4" />
          <p className="font-serif-book text-sm leading-[1.85] text-[hsl(var(--book-text))]">
            Explore as conexões entre os conceitos do livro. Clique nos nós para expandir ramos.
            Clique duas vezes em um nó para ir ao capítulo correspondente.
            Arraste para mover o mapa e use Ctrl+Scroll para zoom.
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 mb-3 ml-2 flex-wrap">
          <button onClick={expandAll} className="text-[11px] font-sans-book px-2.5 py-1 rounded bg-muted hover:bg-accent/10 text-muted-foreground hover:text-accent transition-colors">Expandir tudo</button>
          <button onClick={collapseAll} className="text-[11px] font-sans-book px-2.5 py-1 rounded bg-muted hover:bg-accent/10 text-muted-foreground hover:text-accent transition-colors">Recolher</button>
          <div className="w-px h-4 bg-border mx-1" />
          <button onClick={() => setZoom((z) => Math.min(2.5, z + 0.15))} className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-accent transition-colors"><ZoomIn size={14} /></button>
          <button onClick={() => setZoom((z) => Math.max(0.3, z - 0.15))} className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-accent transition-colors"><ZoomOut size={14} /></button>
          <button onClick={resetView} className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-accent transition-colors" title="Resetar visão"><Maximize2 size={14} /></button>
          <span className="text-[10px] text-muted-foreground ml-1">{Math.round(zoom * 100)}%</span>
        </div>

        {/* Canvas */}
        <div
          ref={containerRef}
          className="relative w-full rounded-xl border border-border bg-muted/20 overflow-hidden select-none"
          style={{ height: "min(70vh, 620px)", cursor: dragging ? "grabbing" : "grab" }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
        >
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
              backgroundSize: `${20 * zoom}px ${20 * zoom}px`,
              backgroundPosition: `${pan.x}px ${pan.y}px`,
            }}
          />

          <div
            className="absolute"
            style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`, transformOrigin: "0 0", left: 36, top: 36 }}
          >
            <TreeNode
              node={mindMapData}
              depth={0}
              expanded={expanded}
              onToggle={toggleNode}
              linkedChapters={linkedChapters}
              onLinkChapter={handleLinkChapter}
              onUnlinkChapter={handleUnlinkChapter}
              onNavigate={onNavigate}
            />
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mt-4 px-2">
          {[
            { label: "Linguagens Lógicas", key: "linguagens" },
            { label: "Semântica e Modelos", key: "semantica" },
            { label: "Métodos de Raciocínio", key: "metodos" },
            { label: "Limites e Perspectivas", key: "limites" },
          ].map((item) => (
            <div key={item.key} className="flex items-center gap-1.5 text-[10px] font-sans-book text-muted-foreground">
              <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: BRANCH_COLORS[item.key].badge }} />
              {item.label}
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="max-w-2xl mx-auto flex items-center justify-between mt-12 pt-8 border-t border-border">
          {prevChapter ? (
            <button onClick={() => onNavigate(prevChapter.id)} className="flex items-center gap-2 text-sm font-sans-book text-muted-foreground hover:text-accent transition-colors group">
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <span className="block text-[10px] uppercase tracking-widest">Anterior</span>
                <span className="block font-medium text-foreground">{prevChapter.title}</span>
              </div>
            </button>
          ) : <div />}
          {nextChapter ? (
            <button onClick={() => onNavigate(nextChapter.id)} className="flex items-center gap-2 text-sm font-sans-book text-muted-foreground hover:text-accent transition-colors group text-right">
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

export default MindMapContent;
