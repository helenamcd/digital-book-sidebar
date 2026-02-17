import { ChevronLeft, ChevronRight } from "lucide-react";
import { chapterContents, chapters } from "@/data/bookContent";

interface BookContentProps {
  activeChapter: string;
  onNavigate: (id: string) => void;
}

const BookContent = ({ activeChapter, onNavigate }: BookContentProps) => {
  const content = chapterContents[activeChapter];
  const currentIndex = chapters.findIndex((c) => c.id === activeChapter);
  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

  if (!content) return null;

  return (
    <main className="flex-1 min-h-screen overflow-y-auto scrollbar-thin bg-background">
      <div className="max-w-2xl mx-auto px-6 md:px-12 py-12 md:py-20">
        {/* Chapter header */}
        {content.subtitle && (
          <p className="text-xs font-sans-book font-semibold tracking-[0.25em] uppercase text-accent mb-3">
            {content.subtitle}
          </p>
        )}
        <h2 className="font-serif-book text-3xl md:text-4xl font-bold text-[hsl(var(--book-heading))] mb-2">
          {content.title}
        </h2>
        <div className="w-16 h-0.5 bg-accent mb-10" />

        {/* Paragraphs */}
        <article className="space-y-6">
          {content.paragraphs.map((p, i) => {
            const isQuote = p.startsWith('"') && p.includes("—");
            if (isQuote) {
              return (
                <blockquote
                  key={i}
                  className="border-l-4 border-accent pl-6 py-2 italic font-serif-book text-muted-foreground text-lg leading-relaxed"
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
                  font-serif-book leading-[1.9] text-[hsl(var(--book-text))]
                  ${isFinalWord ? "text-center text-2xl font-bold mt-12 text-accent" : "text-base md:text-[1.05rem]"}
                  ${i === 0 ? "first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-accent first-letter:leading-none" : ""}
                `}
              >
                {p}
              </p>
            );
          })}
        </article>

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
