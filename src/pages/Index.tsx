import { useState } from "react";
import BookSidebar from "@/components/BookSidebar";
import BookContent from "@/components/BookContent";

const Index = () => {
  const [activeChapter, setActiveChapter] = useState("intro");

  const handleNavigate = (id: string) => {
    setActiveChapter(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex min-h-screen">
      <BookSidebar activeChapter={activeChapter} onSelectChapter={handleNavigate} />
      <BookContent activeChapter={activeChapter} onNavigate={handleNavigate} />
    </div>
  );
};

export default Index;
