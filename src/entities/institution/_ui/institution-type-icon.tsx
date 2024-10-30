import { FC } from "react";
import { cn } from "@/shared/ui/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/shared/ui";
import { useTranslations } from "next-intl";
import { InstitutionTypes } from "@/entities/institution/client";
import { School, Shapes } from "lucide-react";

interface Props {
  type: InstitutionType;
  className?: string;
}

export const InstitutionTypeIcon: FC<Props> = ({ type, className }) => {
  const t = useTranslations("Common");

  let text;

  const getIcon = () => {
    switch (type) {
      case InstitutionTypes.KINDERGARTEN:
        text = t("kindergarten");
        return <Shapes />;
      case InstitutionTypes.SCHOOL:
        text = t("school");
        return <School />;
      default:
        return <School />;
    }
  };

  return (
    <HoverCard>
      <HoverCardTrigger asChild>{getIcon()}</HoverCardTrigger>
      <HoverCardContent className={cn("flex w-full p-2", className)}>
        <p className="">{text}</p>
      </HoverCardContent>
    </HoverCard>
  );
};
