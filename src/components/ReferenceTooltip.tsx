import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { BookOpen } from "lucide-react";

interface ReferenceTooltipProps {
  label: string;
  reference: string;
}

const ReferenceTooltip = ({ label, reference }: ReferenceTooltipProps) => {
  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>
        <span className="border-b border-dashed border-accent/60 text-accent cursor-help transition-colors hover:border-accent hover:text-accent/80 font-semibold">
          {label}
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="w-96 p-4" side="top" align="center">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-accent shrink-0" />
            <h4 className="font-serif-book text-sm font-bold text-accent">
              Referência Bibliográfica
            </h4>
          </div>
          <p className="font-serif-book text-xs leading-relaxed text-[hsl(var(--book-text))]">
            {reference}
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default ReferenceTooltip;
