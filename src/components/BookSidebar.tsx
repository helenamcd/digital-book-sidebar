import { useState } from "react";
import { BookOpen, ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { chapters, type Chapter } from "@/data/bookContent";

interface BookSidebarProps {
  activeChapter: string;
  onSelectChapter: (id: string) => void;
}

const BookSidebar = ({ activeChapter, onSelectChapter }: BookSidebarProps) => {
  const [expandedChapters, setExpandedChapters] = useState<string[]>(["intro"]);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleExpand = (id: string) => {
    setExpandedChapters((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const handleSelect = (id: string) => {
    onSelectChapter(id);
    setMobileOpen(false);
  };

  const renderChapter = (chapter: Chapter) => {
    const isActive = activeChapter === chapter.id;
    const isExpanded = expandedChapters.includes(chapter.id);
    const hasSections = chapter.sections && chapter.sections.length > 0;

    return (
      <li key={chapter.id}>
        <button
          onClick={() => {
            handleSelect(chapter.id);
            if (hasSections) toggleExpand(chapter.id);
          }}
          className={`
            w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-left text-sm font-sans-book transition-all duration-200
            ${isActive
              ? "bg-[hsl(var(--sidebar-active))] text-[hsl(var(--sidebar-active-fg))] font-semibold shadow-md shadow-[hsl(var(--sidebar-active)/0.3)]"
              : "text-[hsl(var(--sidebar-fg))] hover:bg-[hsl(var(--sidebar-hover))] hover:text-[hsl(var(--sidebar-active-fg))]"
            }
          `}
        >
          {hasSections && (
            <span className="w-4 flex-shrink-0">
              {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            </span>
          )}
          {!hasSections && <span className="w-4 flex-shrink-0" />}
          <span className="truncate">{chapter.title}</span>
        </button>

        {hasSections && isExpanded && (
          <ul className="ml-8 mt-1 space-y-0.5 border-l border-[hsl(var(--sidebar-border))] pl-3">
            {chapter.sections!.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => handleSelect(section.id)}
                  className={`w-full text-left px-3 py-1.5 text-xs transition-colors rounded ${
                    activeChapter === section.id
                      ? "text-[hsl(var(--sidebar-active))] font-semibold bg-[hsl(var(--sidebar-active)/0.1)]"
                      : "text-[hsl(var(--sidebar-heading))] hover:text-[hsl(var(--sidebar-active))]"
                  }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  const sidebarContent = (
    <>
      <div className="flex items-center gap-3 px-5 py-5 border-b border-[hsl(var(--sidebar-border))]">
        <BookOpen size={24} className="text-[hsl(var(--sidebar-active))]" />
        <div>
          <h1 className="text-sm font-bold text-[hsl(var(--sidebar-active-fg))] font-serif-book leading-tight">
            Fundamentos de Lógica Aplicada à Ciência de Dados
          </h1>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto scrollbar-thin px-3 py-4">
        <p className="px-4 mb-2 text-[10px] font-semibold tracking-widest uppercase text-[hsl(var(--sidebar-heading))]">
          Sumário
        </p>
        <ul className="space-y-1">
          {chapters.map(renderChapter)}
        </ul>
      </nav>

      <div className="px-5 py-4 border-t border-[hsl(var(--sidebar-border))]">
        <p className="text-[10px] text-[hsl(var(--sidebar-heading))] text-center">
          © 2026 · Fundamentos de Lógica
        </p>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg bg-[hsl(var(--sidebar-bg))] text-[hsl(var(--sidebar-fg))] shadow-lg"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen w-72 flex flex-col
          bg-[hsl(var(--sidebar-bg))] text-[hsl(var(--sidebar-fg))]
          transition-transform duration-300 ease-in-out
          md:translate-x-0 md:sticky md:top-0 md:z-auto
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {sidebarContent}
      </aside>
    </>
  );
};

export default BookSidebar;
