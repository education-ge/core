import { FC, ReactNode } from "react";
import { cn } from "@/shared/ui/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/shared/ui";

interface Props {
  icon: ReactNode;
  text: string;
  className?: string;
}

export const HoverIcon: FC<Props> = ({ icon, text, className }) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{icon}</HoverCardTrigger>
      <HoverCardContent className={cn("flex w-full p-2", className)}>
        <p className="">{text}</p>
      </HoverCardContent>
    </HoverCard>
  );
};
