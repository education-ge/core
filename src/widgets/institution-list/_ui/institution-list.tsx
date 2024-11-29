"use client";

import { FC, PropsWithChildren } from "react";
import { cn } from "@/shared/ui/utils";
import { Skeleton } from "@/shared/ui";

interface Props {
  isLoading?: boolean;
  classNames?: string;
}

export const InstitutionList: FC<PropsWithChildren<Props>> = ({
  children,
  isLoading,
  classNames,
}) => {
  if (isLoading) {
    return (
      <div className={cn("flex flex-col items-center gap-4", classNames)}>
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} className="h-[190px] w-full rounded-xl" />
          ))}
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col items-center gap-4", classNames)}>
      {children}
    </div>
  );
};
