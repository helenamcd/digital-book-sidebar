import { Presentation, Download, FileText, MessageSquareText, Sparkles, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { chapters, hiddenChapterPrefixes } from "@/data/bookContent";

interface SlidesContentProps {
  onNavigate: (id: string) => void;
}

const PPTX_URL = "/logica-cd-slides-aula-com-scripts.pptx";

const features = [
  {
    icon: Presentation,
    title: "9 capítulos completos",
    text: "Um deck por capítulo, do Prefácio à Conclusão, pronto para uma aula de ~60 minutos.",
  },
  {
    icon: Sparkles,
    title: "Visual em primeiro lugar",
    text: "Tabelas-verdade, fórmulas e diagramas ocupam o palco. Texto aparece só em palavras-chave.",
  },
  {
    icon: MessageSquareText,
    title: "Anotações de explicação",
    text: "Cada slide traz um roteiro de fala nas notas do PowerPoint, guiando a explicação do professor.",
  },
  {
    icon: FileText,
    title: "Editável (.pptx)",
    text: "Arquivo nativo do PowerPoint: troque cores, reordene slides ou adapte ao seu contexto.",
  },
];

const visibleChapters = chapters.filter(
  (ch) => !hiddenChapterPrefixes.some((p) => ch.id.startsWith(p))
);

const SlidesContent = ({ onNavigate }: SlidesContentProps) => {
  const idx = visibleChapters.findIndex((c) => c.id === "slides-aula");
  const prev = visibleChapters[idx - 1];
  const next = visibleChapters[idx + 1];

  return (
    <main className="flex-1 bg-background min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, hsl(var(--accent)) 0%, transparent 45%), radial-gradient(circle at 80% 70%, hsl(var(--accent)) 0%, transparent 45%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 md:px-10 pt-20 pb-16 md:pt-28 md:pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(var(--accent)/0.1)] text-[hsl(var(--accent))] text-[11px] font-sans-book uppercase tracking-widest mb-6">
            <Presentation size={12} />
            Material Didático
          </div>
          <h1 className="font-serif-display text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
            Slides de Aula
          </h1>
          <p className="font-serif-book text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Uma apresentação completa do livro,{" "}
            <em className="text-foreground">capítulo a capítulo</em>, com{" "}
            <strong className="text-foreground">anotações de explicação</strong>{" "}
            em cada slide para apoiar professores e alunos.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
            <a
              href={PPTX_URL}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] font-sans-book font-semibold text-sm shadow-lg shadow-[hsl(var(--accent)/0.3)] hover:translate-y-[-2px] transition-all"
            >
              <Download size={16} />
              Baixar slides (.pptx)
            </a>
            <span className="text-xs font-sans-book text-muted-foreground">
              Compatível com PowerPoint, Keynote e Google Slides
            </span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-16">
        <div className="grid sm:grid-cols-2 gap-5">
          {features.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group relative p-6 rounded-xl border border-border bg-card hover:border-[hsl(var(--accent)/0.5)] transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-[hsl(var(--accent)/0.1)] flex items-center justify-center mb-4 text-[hsl(var(--accent))] group-hover:scale-110 transition-transform">
                <Icon size={20} />
              </div>
              <h3 className="font-serif-display text-lg font-semibold text-foreground mb-2">
                {title}
              </h3>
              <p className="font-serif-book text-sm text-muted-foreground leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* How to use */}
        <div className="mt-14 p-8 rounded-2xl bg-[hsl(var(--accent)/0.05)] border border-[hsl(var(--accent)/0.2)]">
          <h2 className="font-serif-display text-2xl font-bold text-foreground mb-5 flex items-center gap-2">
            <BookOpen size={20} className="text-[hsl(var(--accent))]" />
            Como usar em sala de aula
          </h2>
          <ol className="space-y-3 font-serif-book text-[15px] text-foreground leading-relaxed list-none">
            {[
              "Baixe o arquivo .pptx e abra no PowerPoint ou no Keynote.",
              "Ative o modo apresentador para visualizar as anotações em cada slide.",
              "Cada capítulo é uma aula de aproximadamente 60 minutos.",
              "Adapte cores, exemplos ou exercícios conforme o perfil da sua turma.",
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] flex items-center justify-center font-sans-book font-bold text-sm">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-10 text-center font-sans-book text-xs text-muted-foreground italic">
          Material gerado com auxílio de IA. Revisão pedagógica recomendada antes do uso em sala.
        </p>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-14 pt-8 border-t border-border">
          {prev ? (
            <button
              onClick={() => onNavigate(prev.id)}
              className="flex items-center gap-2 text-sm font-sans-book text-muted-foreground hover:text-[hsl(var(--accent))] transition-colors group"
            >
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <span className="block text-[10px] uppercase tracking-widest">Anterior</span>
                <span className="block font-medium text-foreground">{prev.title}</span>
              </div>
            </button>
          ) : <div />}
          {next ? (
            <button
              onClick={() => onNavigate(next.id)}
              className="flex items-center gap-2 text-sm font-sans-book text-muted-foreground hover:text-[hsl(var(--accent))] transition-colors group text-right"
            >
              <div>
                <span className="block text-[10px] uppercase tracking-widest">Próximo</span>
                <span className="block font-medium text-foreground">{next.title}</span>
              </div>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          ) : <div />}
        </div>
      </section>
    </main>
  );
};

export default SlidesContent;