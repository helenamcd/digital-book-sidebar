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
import { useIsMobile } from "@/hooks/use-mobile";

interface GlossaryTooltipProps {
  term: string;
  definition: string;
  children: React.ReactNode;
}

const GlossaryTooltip = ({ term, definition, children }: GlossaryTooltipProps) => {
  const isMobile = useIsMobile();

  const triggerClass = "border-b border-dashed border-accent/60 text-accent cursor-help transition-colors hover:border-accent hover:text-accent/80";

  const content = (
    <div className="space-y-2">
      <h4 className="font-serif-book text-sm font-bold text-accent">
        {term}
      </h4>
      <p className="font-serif-book text-xs leading-relaxed text-[hsl(var(--book-text))]">
        {definition}
      </p>
    </div>
  );

  if (isMobile) {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <span className={triggerClass}>{children}</span>
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
        <span className={triggerClass}>{children}</span>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-4" side="top" align="center">
        {content}
      </HoverCardContent>
    </HoverCard>
  );
};

export default GlossaryTooltip;
