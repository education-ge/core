import { FC } from "react";
import { cn } from "@/shared/ui/utils";
import { Institution } from "@/entities/institution/client";
import { InstitutionListItem } from "./institution-list-item";

interface Props {
  institutions: Institution[];
  classNames?: string;
}

export const InstitutionList: FC<Props> = ({ institutions, classNames }) => {
  return (
    <div className={cn("flex flex-col items-center gap-2", classNames)}>
      {institutions.map((item) => (
        <InstitutionListItem
          key={`${item.type}-${item.id}`}
          institution={item}
        />
      ))}
    </div>
  );
};
