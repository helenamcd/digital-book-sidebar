import { useState, useEffect, useCallback } from "react";
import BookSidebar from "@/components/BookSidebar";
import BookContent from "@/components/BookContent";
import BookCover from "@/components/BookCover";
import GlossaryContent from "@/components/GlossaryContent";
import MindMapContent from "@/components/MindMapContent";
import SlidesContent from "@/components/SlidesContent";

const Index = () => {
  const getInitialChapter = () => {
    // Check hash first
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      localStorage.setItem("book_visited", "true");
      return hash;
    }
    const visited = localStorage.getItem("book_visited");
    if (visited) return "prefacio";
    return "capa";
  };

  const [activeChapter, setActiveChapter] = useState(getInitialChapter);

  // Sync hash → state on browser back/forward
  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        localStorage.setItem("book_visited", "true");
        setActiveChapter(hash);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const handleNavigate = useCallback((id: string) => {
    if (id !== "capa") {
      localStorage.setItem("book_visited", "true");
    }
    window.location.hash = id === "capa" ? "" : id;
    setActiveChapter(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (activeChapter === "capa") {
    return <BookCover onNavigate={handleNavigate} />;
  }

  return (
    <div className="flex min-h-screen">
      <BookSidebar activeChapter={activeChapter} onSelectChapter={handleNavigate} />
      {activeChapter === "glossario" ? (
        <GlossaryContent onNavigate={handleNavigate} />
      ) : activeChapter === "mapa-mental" ? (
        <MindMapContent onNavigate={handleNavigate} />
      ) : activeChapter === "slides-aula" ? (
        <SlidesContent onNavigate={handleNavigate} />
      ) : (
        <BookContent activeChapter={activeChapter} onNavigate={handleNavigate} />
      )}
    </div>
  );
};

export default Index;
