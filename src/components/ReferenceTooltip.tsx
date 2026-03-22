import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BookOpen } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ReferenceTooltipProps {
  label: string;
  reference: string;
}

const ReferenceTooltip = ({ label, reference }: ReferenceTooltipProps) => {
  const isMobile = useIsMobile();

  const triggerClass = "border-b border-dashed border-accent/60 text-accent cursor-help transition-colors hover:border-accent hover:text-accent/80 font-semibold";

  const content = (
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
  );

  if (isMobile) {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <span className={triggerClass}>{label}</span>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-4" side="top" align="center">
          {content}
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>
        <span className={triggerClass}>{label}</span>
      </HoverCardTrigger>
      <HoverCardContent className="w-96 p-4" side="top" align="center">
        {content}
      </HoverCardContent>
    </HoverCard>
  );
};

export default ReferenceTooltip;
