import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface GlossaryTooltipProps {
  term: string;
  definition: string;
  children: React.ReactNode;
}

const GlossaryTooltip = ({ term, definition, children }: GlossaryTooltipProps) => {
  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>
        <span className="border-b border-dashed border-accent/60 text-accent cursor-help transition-colors hover:border-accent hover:text-accent/80">
          {children}
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-4" side="top" align="center">
        <div className="space-y-2">
          <h4 className="font-serif-book text-sm font-bold text-accent">
            {term}
          </h4>
          <p className="font-serif-book text-xs leading-relaxed text-[hsl(var(--book-text))]">
            {definition}
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default GlossaryTooltip;
