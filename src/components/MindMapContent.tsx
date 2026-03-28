import React, { useState, useCallback, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import { chapters, hiddenChapterPrefixes } from "@/data/bookContent";

interface MindMapContentProps {
  onNavigate: (id: string) => void;
}

interface MapNode {
  id: string;
  label: string;
  navigateTo?: string;
  children?: MapNode[];
  color?: string;
}

const COLORS = {
  linguagens: "hsl(220, 55%, 50%)",
  proposicional: "hsl(28, 80%, 52%)",
  relacional: "hsl(260, 50%, 55%)",
  lpo: "hsl(180, 50%, 40%)",
  propriedades: "hsl(150, 50%, 40%)",
  metodos: "hsl(340, 55%, 50%)",
  provas: "hsl(200, 60%, 45%)",
  modelos: "hsl(45, 70%, 45%)",
  resolucao: "hsl(0, 55%, 50%)",
  generalizacao: "hsl(280, 45%, 50%)",
  conclusao: "hsl(220, 25%, 35%)",
};

const mindMap: MapNode = {
  id: "root",
  label: "Lógica Aplicada\nà Ciência de Dados",
  children: [
    {
      id: "linguagens",
      label: "Linguagens\nLógicas",
      color: COLORS.linguagens,
      children: [
        {
          id: "prop",
          label: "Proposicional",
          color: COLORS.proposicional,
          navigateTo: "cap2",
          children: [
            { id: "p-sint", label: "Sintaxe", navigateTo: "cap1-sec1", color: COLORS.proposicional },
            { id: "p-sem", label: "Semântica", navigateTo: "cap1-sec2", color: COLORS.proposicional },
            { id: "p-aval", label: "Avaliação", navigateTo: "cap1-sec3", color: COLORS.proposicional },
            { id: "p-sat", label: "Satisfatibilidade", navigateTo: "cap1-sec4", color: COLORS.proposicional },
          ],
        },
        {
          id: "rel",
          label: "Relacional",
          color: COLORS.relacional,
          navigateTo: "cap4",
          children: [
            { id: "r-voc", label: "Vocabulário", navigateTo: "cap4-sec1", color: COLORS.relacional },
            { id: "r-quant", label: "Quantificadores", navigateTo: "cap4-sec2", color: COLORS.relacional },
            { id: "r-herb", label: "Herbrand", navigateTo: "cap4-sec4", color: COLORS.relacional },
          ],
        },
        {
          id: "lpo",
          label: "Primeira Ordem",
          color: COLORS.lpo,
          navigateTo: "cap7",
          children: [
            { id: "l-sint", label: "Sintaxe LPO", navigateTo: "cap7-sec2", color: COLORS.lpo },
            { id: "l-interp", label: "Interpretações", navigateTo: "cap7-sec3", color: COLORS.lpo },
            { id: "l-igual", label: "Igualdade", navigateTo: "cap7-sec6", color: COLORS.lpo },
            { id: "l-arit", label: "Aritmética", navigateTo: "cap7-sec5", color: COLORS.lpo },
          ],
        },
      ],
    },
    {
      id: "propriedades",
      label: "Propriedades\ne Relações",
      color: COLORS.propriedades,
      children: [
        {
          id: "props-sent",
          label: "De sentenças",
          color: COLORS.propriedades,
          children: [
            { id: "ps-val", label: "Validade", navigateTo: "cap2-sec1", color: COLORS.propriedades },
            { id: "ps-cont", label: "Contingência", navigateTo: "cap2-sec1", color: COLORS.propriedades },
            { id: "ps-insat", label: "Insatisfatibilidade", navigateTo: "cap2-sec1", color: COLORS.propriedades },
          ],
        },
        {
          id: "rels-sent",
          label: "Entre sentenças",
          color: COLORS.propriedades,
          children: [
            { id: "rs-equiv", label: "Equivalência", navigateTo: "cap2-sec2", color: COLORS.propriedades },
            { id: "rs-conseq", label: "Consequência", navigateTo: "cap2-sec3", color: COLORS.propriedades },
            { id: "rs-consist", label: "Consistência", navigateTo: "cap2-sec4", color: COLORS.propriedades },
          ],
        },
      ],
    },
    {
      id: "metodos",
      label: "Métodos de\nRaciocínio",
      color: COLORS.metodos,
      children: [
        {
          id: "provas",
          label: "Provas",
          color: COLORS.provas,
          navigateTo: "cap3",
          children: [
            { id: "pv-hilb", label: "Hilbert", navigateTo: "cap3-sec1", color: COLORS.provas },
            { id: "pv-fitch", label: "Fitch", navigateTo: "cap3-sec3", color: COLORS.provas },
            { id: "pv-solid", label: "Solidez / Completude", navigateTo: "cap3-sec6", color: COLORS.provas },
          ],
        },
        {
          id: "modelos",
          label: "Modelos",
          color: COLORS.modelos,
          navigateTo: "cap5",
          children: [
            { id: "md-tv", label: "Tabelas-verdade", navigateTo: "cap5-sec1", color: COLORS.modelos },
            { id: "md-prop", label: "Propagação", navigateTo: "cap5-sec2", color: COLORS.modelos },
          ],
        },
        {
          id: "resolucao",
          label: "Resolução",
          color: COLORS.resolucao,
          navigateTo: "cap6",
          children: [
            { id: "res-cl", label: "Forma Clausal", navigateTo: "cap6-sec1", color: COLORS.resolucao },
            { id: "res-unif", label: "Unificação", navigateTo: "cap6-sec5", color: COLORS.resolucao },
            { id: "res-ref", label: "Refutação", navigateTo: "cap6-sec3", color: COLORS.resolucao },
            { id: "res-sk", label: "Skolemização", navigateTo: "cap6-sec7", color: COLORS.resolucao },
          ],
        },
      ],
    },
    {
      id: "generalizacao",
      label: "Generalização",
      color: COLORS.generalizacao,
      navigateTo: "cap8",
      children: [
        { id: "g-lin", label: "Linear", navigateTo: "cap8-sec3", color: COLORS.generalizacao },
        { id: "g-arv", label: "Em Árvore", navigateTo: "cap8-sec4", color: COLORS.generalizacao },
        { id: "g-estr", label: "Estrutural", navigateTo: "cap8-sec5", color: COLORS.generalizacao },
        { id: "g-multi", label: "Multidimensional", navigateTo: "cap8-sec6", color: COLORS.generalizacao },
      ],
    },
    {
      id: "conclusao",
      label: "Limites e\nPerspectivas",
      color: COLORS.conclusao,
      navigateTo: "cap9",
      children: [
        { id: "c-ia", label: "Raciocínio em IA", navigateTo: "cap9-sec4", color: COLORS.conclusao },
        { id: "c-ml", label: "Lógica e ML", navigateTo: "cap9-sec5", color: COLORS.conclusao },
        { id: "c-lim", label: "Indecidibilidade", navigateTo: "cap9-sec6", color: COLORS.conclusao },
      ],
    },
  ],
};

// ── Recursive horizontal tree node ──────────────────────────────

interface NodeProps {
  node: MapNode;
  depth: number;
  expanded: Set<string>;
  onToggle: (id: string) => void;
  onNav: (id: string) => void;
  parentColor?: string;
}

const TreeNode = ({ node, depth, expanded, onToggle, onNav, parentColor }: NodeProps) => {
  const isRoot = depth === 0;
  const hasChildren = node.children && node.children.length > 0;
  const isOpen = expanded.has(node.id);
  const color = node.color || parentColor || COLORS.linguagens;
  const lines = node.label.split("\n");

  const handleClick = () => {
    if (hasChildren) {
      onToggle(node.id);
    } else if (node.navigateTo) {
      onNav(node.navigateTo);
    }
  };

  const handleDblClick = () => {
    if (node.navigateTo) onNav(node.navigateTo);
  };

  return (
    <div className="flex items-center" style={{ gap: isRoot ? 28 : depth <= 1 ? 20 : 14 }}>
      {/* Node pill */}
      <button
        onClick={handleClick}
        onDoubleClick={handleDblClick}
        className="relative shrink-0 transition-all duration-200 focus:outline-none group"
        title={node.navigateTo ? "Clique para expandir · Duplo-clique para navegar" : undefined}
      >
        <div
          className={`
            px-3.5 py-2 rounded-xl text-center whitespace-nowrap transition-all duration-200 select-none
            ${isRoot
              ? "px-5 py-3 rounded-2xl shadow-lg font-bold text-sm md:text-base"
              : depth === 1
                ? "shadow-md font-semibold text-xs md:text-sm"
                : hasChildren
                  ? "shadow-sm font-medium text-[11px] md:text-xs"
                  : "shadow-sm font-normal text-[11px] md:text-xs border border-transparent hover:border-current"
            }
          `}
          style={{
            backgroundColor: isRoot ? color : `color-mix(in srgb, ${color} ${isOpen ? 22 : 12}%, transparent)`,
            color: isRoot ? "#fff" : color,
            borderColor: !isRoot && !hasChildren ? `color-mix(in srgb, ${color} 30%, transparent)` : undefined,
          }}
        >
          {lines.map((l, i) => (
            <div key={i} className={i > 0 ? "-mt-0.5" : ""}>{l}</div>
          ))}
          {hasChildren && (
            <span
              className="absolute -right-1 -top-1 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold text-white"
              style={{ backgroundColor: color }}
            >
              {isOpen ? "−" : "+"}
            </span>
          )}
        </div>
      </button>

      {/* Children branch */}
      {hasChildren && isOpen && (
        <div className="flex items-center" style={{ gap: depth <= 1 ? 20 : 14 }}>
          {/* Horizontal connector */}
          <div className="w-5 md:w-8 h-0.5 shrink-0" style={{ backgroundColor: `color-mix(in srgb, ${color} 40%, transparent)` }} />

          {/* Vertical stack of children */}
          <div className="flex flex-col relative" style={{ gap: depth <= 1 ? 10 : 6 }}>
            {/* Vertical line */}
            <div
              className="absolute left-0 top-1/2 w-0.5 -translate-x-3 md:-translate-x-5"
              style={{
                backgroundColor: `color-mix(in srgb, ${color} 25%, transparent)`,
                height: `calc(100% - 20px)`,
                top: "10px",
              }}
            />
            {node.children!.map((child) => (
              <div key={child.id} className="flex items-center">
                {/* Small horizontal tick */}
                <div className="w-2 md:w-4 h-0.5 shrink-0 -ml-3 md:-ml-5" style={{ backgroundColor: `color-mix(in srgb, ${color} 30%, transparent)` }} />
                <TreeNode
                  node={child}
                  depth={depth + 1}
                  expanded={expanded}
                  onToggle={onToggle}
                  onNav={onNav}
                  parentColor={color}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ── Main component ──────────────────────────────────────────────

const allPages = chapters
  .filter((ch) => !hiddenChapterPrefixes.some((prefix) => ch.id.startsWith(prefix)))
  .flatMap((ch) => {
    const pages = [{ id: ch.id, title: ch.title }];
    if (ch.sections) pages.push(...ch.sections.map((s) => ({ id: s.id, title: s.title })));
    return pages;
  });

const MindMapContent = ({ onNavigate }: MindMapContentProps) => {
  const [expanded, setExpanded] = useState<Set<string>>(new Set(["root", "linguagens", "propriedades", "metodos"]));
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, panX: 0, panY: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleNode = useCallback((id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const expandAll = useCallback(() => {
    const ids = new Set<string>();
    const collect = (node: MapNode) => {
      ids.add(node.id);
      node.children?.forEach(collect);
    };
    collect(mindMap);
    setExpanded(ids);
  }, []);

  const collapseAll = useCallback(() => {
    setExpanded(new Set(["root"]));
  }, []);

  const resetView = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  // Mouse drag for panning
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button !== 0) return;
    setDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY, panX: pan.x, panY: pan.y };
  }, [pan]);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragging) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    setPan({ x: dragStart.current.panX + dx, y: dragStart.current.panY + dy });
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

  // Touch drag for mobile
  const touchStart = useRef({ x: 0, y: 0, panX: 0, panY: 0 });

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY, panX: pan.x, panY: pan.y };
    }
  }, [pan]);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      const dx = e.touches[0].clientX - touchStart.current.x;
      const dy = e.touches[0].clientY - touchStart.current.y;
      setPan({ x: touchStart.current.panX + dx, y: touchStart.current.panY + dy });
    }
  }, []);

  const currentIndex = allPages.findIndex((p) => p.id === "mapa-mental");
  const prevChapter = currentIndex > 0 ? allPages[currentIndex - 1] : null;
  const nextChapter = currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null;

  return (
    <main className="flex-1 min-h-screen overflow-y-auto scrollbar-thin bg-background">
      <div className="max-w-full mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-6">
          <p className="text-xs font-sans-book font-semibold tracking-[0.25em] uppercase text-accent mb-2">
            Visão Geral
          </p>
          <h2 className="font-serif-book text-2xl md:text-3xl font-bold text-[hsl(var(--book-heading))] mb-2">
            Mapa Conceitual do Livro
          </h2>
          <div className="w-16 h-0.5 bg-accent mb-4" />
          <p className="font-serif-book text-sm leading-[1.85] text-[hsl(var(--book-text))]">
            Explore as conexões entre os conceitos do livro. Clique nos nós para expandir ramos; duplo-clique para navegar ao capítulo. Arraste para mover o mapa e use Ctrl+Scroll para zoom.
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 mb-3 ml-2">
          <button onClick={expandAll} className="text-[11px] font-sans-book px-2.5 py-1 rounded bg-muted hover:bg-accent/10 text-muted-foreground hover:text-accent transition-colors">
            Expandir tudo
          </button>
          <button onClick={collapseAll} className="text-[11px] font-sans-book px-2.5 py-1 rounded bg-muted hover:bg-accent/10 text-muted-foreground hover:text-accent transition-colors">
            Recolher
          </button>
          <div className="w-px h-4 bg-border mx-1" />
          <button onClick={() => setZoom((z) => Math.min(2.5, z + 0.15))} className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-accent transition-colors">
            <ZoomIn size={14} />
          </button>
          <button onClick={() => setZoom((z) => Math.max(0.3, z - 0.15))} className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-accent transition-colors">
            <ZoomOut size={14} />
          </button>
          <button onClick={resetView} className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-accent transition-colors" title="Resetar visão">
            <Maximize2 size={14} />
          </button>
          <span className="text-[10px] text-muted-foreground ml-1">{Math.round(zoom * 100)}%</span>
        </div>

        {/* Mind map canvas */}
        <div
          ref={containerRef}
          className="relative w-full rounded-xl border border-border bg-muted/20 overflow-hidden select-none"
          style={{ height: "min(65vh, 560px)", cursor: dragging ? "grabbing" : "grab" }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
        >
          {/* Dot grid background */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
              backgroundSize: `${20 * zoom}px ${20 * zoom}px`,
              backgroundPosition: `${pan.x}px ${pan.y}px`,
            }}
          />

          {/* Tree content */}
          <div
            className="absolute"
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              transformOrigin: "0 0",
              left: 32,
              top: 32,
            }}
          >
            <TreeNode
              node={mindMap}
              depth={0}
              expanded={expanded}
              onToggle={toggleNode}
              onNav={onNavigate}
            />
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-3 mt-4 px-2">
          {[
            { label: "Linguagens", color: COLORS.linguagens },
            { label: "Propriedades", color: COLORS.propriedades },
            { label: "Métodos", color: COLORS.metodos },
            { label: "Generalização", color: COLORS.generalizacao },
            { label: "Conclusão", color: COLORS.conclusao },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-1.5 text-[10px] font-sans-book text-muted-foreground">
              <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: item.color }} />
              {item.label}
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="max-w-2xl mx-auto flex items-center justify-between mt-12 pt-8 border-t border-border">
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

export default MindMapContent;
