
import React from 'react';
import { Sparkles } from 'lucide-react';

const cn = (...classes: (string | undefined | false | null)[]) => classes.filter(Boolean).join(' ');

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
}

// FIX: Changed component definition to React.FC to correctly handle React-specific props like 'key'.
// This resolves the TypeScript error where 'key' was not recognized as a valid prop for the component.
const DisplayCard: React.FC<DisplayCardProps> = ({
  className,
  icon = <Sparkles className="size-4 text-white" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName,
  titleClassName = "text-white",
}) => {
  return (
    <div
      className={cn(
        "relative flex h-36 w-full sm:w-[22rem] sm:-skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 border-white/10 bg-zinc-900/70 backdrop-blur-sm px-4 py-3 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-black after:to-transparent after:content-[''] hover:border-white/20 hover:bg-zinc-800 hover:-translate-y-2 [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className
      )}
    >
      <div>
        <span className="relative inline-block rounded-full bg-gray-800 p-1.5">
          {icon}
        </span>
        <p className={cn("text-lg font-medium", titleClassName)}>{title}</p>
      </div>
      <p className="whitespace-nowrap text-lg text-gray-200">{description}</p>
      <p className="text-gray-400 text-sm">{date}</p>
    </div>
  );
};

interface DisplayCardsProps {
  cards: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  return (
    <div className="flex flex-col items-center gap-4 sm:grid sm:[grid-template-areas:'stack'] sm:place-items-center">
      {cards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}