import { FC } from "react";
import { cn } from "@/shared/ui/utils";
import { Institution } from "@/entities/institution/client";
import { InstitutionListItem } from "./institution-list-item";
import { Skeleton } from "@/shared/ui";

interface Props {
  institutions?: Institution[];
  isLoading?: boolean;
  classNames?: string;
}

export const InstitutionList: FC<Props> = ({
  institutions,
  isLoading,
  classNames,
}) => {
  if (isLoading) {
    return (
      <div className={cn("flex flex-col items-center gap-4", classNames)}>
        {...Array(3)
          .fill(0)
          .map((_, index) => <Skeleton key={index} className="h-6 mb-2" />)}
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col items-center gap-4", classNames)}>
      {institutions?.map((item) => (
        <InstitutionListItem
          key={`${item.type}-${item.id}`}
          institution={item}
        />
      ))}
    </div>
  );
};
