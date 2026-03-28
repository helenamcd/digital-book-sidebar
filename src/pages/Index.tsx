import { useState } from "react";
import BookSidebar from "@/components/BookSidebar";
import BookContent from "@/components/BookContent";
import BookCover from "@/components/BookCover";
import GlossaryContent from "@/components/GlossaryContent";
import MindMapContent from "@/components/MindMapContent";

const Index = () => {
const getInitialChapter = () => {
    const visited = localStorage.getItem("book_visited");
    if (visited) return "prefacio";
    return "capa";
  };

  const [activeChapter, setActiveChapter] = useState(getInitialChapter);

  const handleNavigate = (id: string) => {
    if (id !== "capa") {
      localStorage.setItem("book_visited", "true");
    }
    setActiveChapter(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
      ) : (
        <BookContent activeChapter={activeChapter} onNavigate={handleNavigate} />
      )}
    </div>
  );
};

export default Index;
