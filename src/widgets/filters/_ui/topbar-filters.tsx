"use client";

import { useQueryFilters } from "@/features/filters/client";
import { FilterSearchParams } from "@/features/filters/server";
import { Button, Container } from "@/shared/ui";
import { useTranslations } from "next-intl";
import { FC } from "react";

interface Props {
  searchParams: FilterSearchParams;
}

export const TopbarFilters: FC<Props> = ({ searchParams }) => {
  const t = useTranslations("Filters");
  const { clearQuery } = useQueryFilters(searchParams);

  return (
    <div className="border-b sticky top-0 z-20 bg-white">
      <Container className="flex items-center h-12">
        <div className="font-bold">132 results</div>
        <div className="flex-grow px-4">
          <Button
            variant={"outline"}
            onClick={clearQuery}
            className="h-6 rounded-xl"
          >
            {t("clearFilters")}
          </Button>
        </div>
      </Container>
    </div>
  );
};
