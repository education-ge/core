"use client";

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui";
import { cn } from "@/shared/ui/utils";
import { FC } from "react";
import { useTranslations } from "next-intl";

import { AreaFilter, LanguageFilter } from "@/features/filters/client";
import { useQueryFilters } from "@/features/filters/_model/hooks/use-query-filters";
import { FilterSearchParams } from "@/features/filters/server";

interface Props {
  searchParams: FilterSearchParams;
}

export const Filters: FC<Props> = ({ searchParams }) => {
  const t = useTranslations("Filters");
  const {
    langParams,
    areaParams,
    updateLangParams,
    updateAreaParams,
    clearQuery,
  } = useQueryFilters(searchParams);

  return (
    <Card className={cn("w-80 sticky top-4 self-start")}>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
      </CardHeader>
      <CardContent>
        <LanguageFilter
          selectedLanguages={langParams}
          updateLanguages={updateLangParams}
        />
        <AreaFilter
          selectedAreas={areaParams}
          updateAreas={updateAreaParams}
          classNames="mt-5"
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={clearQuery}>
          {t("clear")}
        </Button>
      </CardFooter>
    </Card>
  );
};
