import React, { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp, BookOpen, Cpu, Brain, Layers, GitBranch, Search, Shield, Infinity, Sparkles, Map } from "lucide-react";
import { chapters, hiddenChapterPrefixes } from "@/data/bookContent";

interface MindMapContentProps {
  onNavigate: (id: string) => void;
}

interface MindNode {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  children?: MindNode[];
  navigateTo?: string;
}

const mindMapData: MindNode[] = [
  {
    id: "intro",
    label: "Introdução",
    description: "Motivação, sentenças lógicas e automação do raciocínio",
    icon: <BookOpen size={18} />,
    color: "hsl(220, 25%, 22%)",
    navigateTo: "intro",
    children: [
      { id: "intro-1", label: "Sentenças Lógicas", description: "O que são e como formalizar afirmações", icon: <></>, color: "", navigateTo: "intro-sec1" },
      { id: "intro-2", label: "Consequência Lógica", description: "Relação de garantia entre premissas e conclusão", icon: <></>, color: "", navigateTo: "intro-sec2" },
      { id: "intro-3", label: "Lógica Simbólica", description: "Representação formal com símbolos e conectivos", icon: <></>, color: "", navigateTo: "intro-sec4" },
      { id: "intro-4", label: "Automação do Raciocínio", description: "SAT solvers e verificação automática", icon: <></>, color: "", navigateTo: "intro-sec5" },
    ],
  },
  {
    id: "cap2",
    label: "Lógica Proposicional",
    description: "Sintaxe, semântica, avaliação, satisfatibilidade e propriedades lógicas",
    icon: <Cpu size={18} />,
    color: "hsl(28, 80%, 52%)",
    navigateTo: "cap2",
    children: [
      { id: "cap2-sint", label: "Sintaxe", description: "Conectivos, precedência e sentenças bem formadas", icon: <></>, color: "", navigateTo: "cap1-sec1" },
      { id: "cap2-sem", label: "Semântica", description: "Tabelas-verdade e atribuições de valor", icon: <></>, color: "", navigateTo: "cap1-sec2" },
      { id: "cap2-aval", label: "Avaliação", description: "Cálculo do valor de verdade de sentenças compostas", icon: <></>, color: "", navigateTo: "cap1-sec3" },
      { id: "cap2-sat", label: "Satisfatibilidade", description: "Existência de atribuições satisfatórias", icon: <></>, color: "", navigateTo: "cap1-sec4" },
      { id: "cap2-props", label: "Propriedades", description: "Validade, contingência, insatisfatibilidade", icon: <></>, color: "", navigateTo: "cap2-sec1" },
      { id: "cap2-equiv", label: "Equivalência", description: "Sentenças com mesmo valor em toda atribuição", icon: <></>, color: "", navigateTo: "cap2-sec2" },
      { id: "cap2-conseq", label: "Consequência", description: "Garantia lógica entre premissas e conclusão", icon: <></>, color: "", navigateTo: "cap2-sec3" },
      { id: "cap2-consist", label: "Consistência", description: "Coexistência de regras sem contradição", icon: <></>, color: "", navigateTo: "cap2-sec4" },
    ],
  },
  {
    id: "cap3",
    label: "Inferência e Prova",
    description: "Sistemas de prova: Hilbert, Fitch, solidez e completude",
    icon: <GitBranch size={18} />,
    color: "hsl(150, 50%, 40%)",
    navigateTo: "cap3",
    children: [
      { id: "cap3-ax", label: "Esquemas de Axiomas", description: "Templates de raciocínio com metavariáveis", icon: <></>, color: "", navigateTo: "cap3-sec1" },
      { id: "cap3-dir", label: "Provas Diretas", description: "Sequência de sentenças justificadas", icon: <></>, color: "", navigateTo: "cap3-sec2" },
      { id: "cap3-fitch", label: "Sistema de Fitch", description: "Dedução natural com subprovas e suposições", icon: <></>, color: "", navigateTo: "cap3-sec3" },
      { id: "cap3-solid", label: "Solidez e Completude", description: "⊢ ⟺ ⊨ para lógica proposicional", icon: <></>, color: "", navigateTo: "cap3-sec6" },
    ],
  },
  {
    id: "cap4",
    label: "Lógica Relacional",
    description: "Constantes, variáveis, quantificadores e Herbrand",
    icon: <Layers size={18} />,
    color: "hsl(260, 50%, 50%)",
    navigateTo: "cap4",
    children: [
      { id: "cap4-voc", label: "Vocabulário", description: "Constantes, variáveis e relações", icon: <></>, color: "", navigateTo: "cap4-sec1" },
      { id: "cap4-quant", label: "Quantificadores", description: "∀ e ∃ em sentenças formais", icon: <></>, color: "", navigateTo: "cap4-sec2" },
      { id: "cap4-herb", label: "Base de Herbrand", description: "Universo finito para decidibilidade", icon: <></>, color: "", navigateTo: "cap4-sec4" },
      { id: "cap4-form", label: "Formalização", description: "Cenários de dados em lógica relacional", icon: <></>, color: "", navigateTo: "cap4-sec8" },
    ],
  },
  {
    id: "cap5",
    label: "Validação e Modelos",
    description: "Tabelas-verdade, propagação de restrições e verificação",
    icon: <Shield size={18} />,
    color: "hsl(200, 60%, 45%)",
    navigateTo: "cap5",
    children: [
      { id: "cap5-tv", label: "Tabelas-Verdade", description: "Método exaustivo de verificação", icon: <></>, color: "", navigateTo: "cap5-sec1" },
      { id: "cap5-bool", label: "Modelos Booleanos", description: "Propagação de restrições", icon: <></>, color: "", navigateTo: "cap5-sec2" },
      { id: "cap5-nbool", label: "Modelos Não-Booleanos", description: "Representações compactas", icon: <></>, color: "", navigateTo: "cap5-sec3" },
    ],
  },
  {
    id: "cap6",
    label: "Resolução Automática",
    description: "Forma clausal, unificação, refutação e SAT solvers",
    icon: <Search size={18} />,
    color: "hsl(340, 60%, 50%)",
    navigateTo: "cap6",
    children: [
      { id: "cap6-clausal", label: "Forma Clausal", description: "Conjunção de disjunções para resolução", icon: <></>, color: "", navigateTo: "cap6-sec1" },
      { id: "cap6-resol", label: "Resolução Proposicional", description: "Derivação mecânica de novas cláusulas", icon: <></>, color: "", navigateTo: "cap6-sec2" },
      { id: "cap6-refut", label: "Refutação", description: "Provar por contradição com cláusula vazia", icon: <></>, color: "", navigateTo: "cap6-sec3" },
      { id: "cap6-unif", label: "Unificação", description: "Casamento de padrões em lógica relacional", icon: <></>, color: "", navigateTo: "cap6-sec5" },
      { id: "cap6-skolem", label: "Skolemização", description: "Eliminação de quantificadores existenciais", icon: <></>, color: "", navigateTo: "cap6-sec7" },
    ],
  },
  {
    id: "cap7",
    label: "Lógica de Primeira Ordem",
    description: "Funções, interpretações, igualdade e universos infinitos",
    icon: <Infinity size={18} />,
    color: "hsl(180, 50%, 40%)",
    navigateTo: "cap7",
    children: [
      { id: "cap7-sint", label: "Sintaxe de LPO", description: "Termos, fórmulas e quantificadores", icon: <></>, color: "", navigateTo: "cap7-sec2" },
      { id: "cap7-sem", label: "Interpretações", description: "Domínios, funções e relações", icon: <></>, color: "", navigateTo: "cap7-sec3" },
      { id: "cap7-arit", label: "Aritmética", description: "Universos infinitos e Peano", icon: <></>, color: "", navigateTo: "cap7-sec5" },
      { id: "cap7-ig", label: "Igualdade", description: "Axiomas de igualdade em LPO", icon: <></>, color: "", navigateTo: "cap7-sec6" },
      { id: "cap7-z3", label: "Exemplo: Z3", description: "SMT solver em ação", icon: <></>, color: "", navigateTo: "cap7-sec9" },
    ],
  },
  {
    id: "cap8",
    label: "Indução e Generalização",
    description: "Indução completa, estrutural, em árvore e multidimensional",
    icon: <Brain size={18} />,
    color: "hsl(45, 70%, 45%)",
    navigateTo: "cap8",
    children: [
      { id: "cap8-tipos", label: "Tipos de Indução", description: "Completa vs. incompleta", icon: <></>, color: "", navigateTo: "cap8-sec1" },
      { id: "cap8-lin", label: "Indução Linear", description: "Caso base + passo indutivo", icon: <></>, color: "", navigateTo: "cap8-sec3" },
      { id: "cap8-arv", label: "Indução em Árvore", description: "Generalização para estruturas recursivas", icon: <></>, color: "", navigateTo: "cap8-sec4" },
      { id: "cap8-estr", label: "Indução Estrutural", description: "Prova sobre ADTs e gramáticas", icon: <></>, color: "", navigateTo: "cap8-sec5" },
    ],
  },
  {
    id: "cap9",
    label: "Conclusão",
    description: "Revisão integrada, limites do raciocínio e caminhos futuros",
    icon: <Sparkles size={18} />,
    color: "hsl(280, 40%, 50%)",
    navigateTo: "cap9",
    children: [
      { id: "cap9-rev", label: "Revisão Integrada", description: "Três perspectivas sobre a lógica", icon: <></>, color: "", navigateTo: "cap9-sec2" },
      { id: "cap9-ia", label: "Raciocínio em IA", description: "Dedutivo, indutivo e abdutivo", icon: <></>, color: "", navigateTo: "cap9-sec4" },
      { id: "cap9-ml", label: "Lógica e ML", description: "Interseções com aprendizado de máquina", icon: <></>, color: "", navigateTo: "cap9-sec5" },
      { id: "cap9-lim", label: "Limites Fundamentais", description: "Indecidibilidade e incompletude", icon: <></>, color: "", navigateTo: "cap9-sec6" },
    ],
  },
];

const chapterColors = [
  "hsl(220, 25%, 22%)",
  "hsl(28, 80%, 52%)",
  "hsl(150, 50%, 40%)",
  "hsl(260, 50%, 50%)",
  "hsl(200, 60%, 45%)",
  "hsl(340, 60%, 50%)",
  "hsl(180, 50%, 40%)",
  "hsl(45, 70%, 45%)",
  "hsl(280, 40%, 50%)",
];

const allPages = chapters
  .filter((ch) => !hiddenChapterPrefixes.some((prefix) => ch.id.startsWith(prefix)))
  .flatMap((ch) => {
    const pages = [{ id: ch.id, title: ch.title }];
    if (ch.sections) pages.push(...ch.sections.map((s) => ({ id: s.id, title: s.title })));
    return pages;
  });

const MindMapContent = ({ onNavigate }: MindMapContentProps) => {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggleNode = useCallback((id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const expandAll = useCallback(() => {
    setExpanded(new Set(mindMapData.map((n) => n.id)));
  }, []);

  const collapseAll = useCallback(() => {
    setExpanded(new Set());
  }, []);

  const currentIndex = allPages.findIndex((p) => p.id === "mapa-mental");
  const prevChapter = currentIndex > 0 ? allPages[currentIndex - 1] : null;
  const nextChapter = currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null;

  return (
    <main className="flex-1 min-h-screen overflow-y-auto scrollbar-thin bg-background">
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-12 md:py-20">
        {/* Header */}
        <p className="text-xs font-sans-book font-semibold tracking-[0.25em] uppercase text-accent mb-3">
          Visão Geral
        </p>
        <h2 className="font-serif-book text-3xl md:text-4xl font-bold text-[hsl(var(--book-heading))] mb-2 flex items-center gap-3">
          <Map size={32} className="text-accent" />
          Mapa Mental do Livro
        </h2>
        <div className="w-16 h-0.5 bg-accent mb-6" />

        <p className="font-serif-book text-sm md:text-[0.95rem] leading-[1.85] text-[hsl(var(--book-text))] mb-8">
          Este mapa interativo apresenta a estrutura completa do livro. Clique em qualquer capítulo para expandir seus tópicos principais. Clique em um tópico para navegar diretamente até ele.
        </p>

        {/* Controls */}
        <div className="flex gap-3 mb-8">
          <button
            onClick={expandAll}
            className="text-xs font-sans-book px-3 py-1.5 rounded-md bg-muted hover:bg-accent/10 text-muted-foreground hover:text-accent transition-colors"
          >
            Expandir tudo
          </button>
          <button
            onClick={collapseAll}
            className="text-xs font-sans-book px-3 py-1.5 rounded-md bg-muted hover:bg-accent/10 text-muted-foreground hover:text-accent transition-colors"
          >
            Recolher tudo
          </button>
        </div>

        {/* Central theme */}
        <div className="flex justify-center mb-8">
          <div className="bg-accent text-accent-foreground px-6 py-3 rounded-xl font-serif-book font-bold text-base md:text-lg shadow-lg shadow-accent/20">
            Fundamentos de Lógica Aplicada à Ciência de Dados
          </div>
        </div>

        {/* Vertical connector from center */}
        <div className="flex justify-center mb-4">
          <div className="w-0.5 h-6 bg-accent/40" />
        </div>

        {/* Chapter nodes */}
        <div className="space-y-3">
          {mindMapData.map((node, idx) => {
            const isExpanded = expanded.has(node.id);
            const color = chapterColors[idx] || node.color;

            return (
              <div key={node.id} className="relative">
                {/* Chapter card */}
                <button
                  onClick={() => toggleNode(node.id)}
                  className="w-full text-left group"
                >
                  <div
                    className="flex items-center gap-4 px-5 py-4 rounded-xl border-2 transition-all duration-300 hover:shadow-md"
                    style={{
                      borderColor: color,
                      backgroundColor: isExpanded ? `${color}10` : "transparent",
                    }}
                  >
                    {/* Chapter number badge */}
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-white shadow-sm"
                      style={{ backgroundColor: color }}
                    >
                      {node.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif-book font-bold text-[hsl(var(--book-heading))] text-sm md:text-base">
                        {node.label}
                      </h3>
                      <p className="font-sans-book text-xs text-muted-foreground truncate">
                        {node.description}
                      </p>
                    </div>

                    <div className="shrink-0 text-muted-foreground group-hover:text-accent transition-colors">
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </div>
                </button>

                {/* Children */}
                {isExpanded && node.children && (
                  <div className="ml-7 mt-1 mb-2 pl-5 border-l-2 space-y-1" style={{ borderColor: `${color}60` }}>
                    {/* Navigate to chapter */}
                    <button
                      onClick={() => node.navigateTo && onNavigate(node.navigateTo)}
                      className="w-full text-left px-4 py-2 rounded-lg hover:bg-accent/10 transition-colors group/item"
                    >
                      <span className="font-sans-book text-xs font-semibold text-accent group-hover/item:underline">
                        → Ir para o capítulo
                      </span>
                    </button>

                    {node.children.map((child) => (
                      <button
                        key={child.id}
                        onClick={() => child.navigateTo && onNavigate(child.navigateTo)}
                        className="w-full text-left px-4 py-2.5 rounded-lg hover:bg-accent/10 transition-all duration-200 group/child"
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                            style={{ backgroundColor: color }}
                          />
                          <div>
                            <span className="font-sans-book text-sm font-semibold text-[hsl(var(--book-heading))] group-hover/child:text-accent transition-colors">
                              {child.label}
                            </span>
                            <p className="font-sans-book text-xs text-muted-foreground mt-0.5">
                              {child.description}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {/* Vertical connector between chapters */}
                {idx < mindMapData.length - 1 && (
                  <div className="flex justify-center py-0.5">
                    <div className="w-0.5 h-3 bg-border" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-12 p-5 rounded-xl bg-muted/50 border border-border">
          <h4 className="font-serif-book text-sm font-bold text-[hsl(var(--book-heading))] mb-3">
            Como usar este mapa
          </h4>
          <ul className="space-y-2 font-sans-book text-xs text-muted-foreground">
            <li className="flex items-start gap-2">
              <ChevronDown size={14} className="shrink-0 mt-0.5" />
              <span>Clique em um capítulo para expandir e ver seus tópicos principais</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
              <span>Clique em qualquer tópico para navegar diretamente até ele no livro</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent shrink-0">→</span>
              <span>Use "Expandir tudo" e "Recolher tudo" para uma visão geral rápida</span>
            </li>
          </ul>
        </div>

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

export default MindMapContent;
