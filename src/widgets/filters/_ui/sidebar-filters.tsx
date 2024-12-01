"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui";
import { cn } from "@/shared/ui/utils";
import { FC } from "react";
import { useTranslations } from "next-intl";

import { AreaFilter, LanguageFilter } from "@/features/filters/client";
import { useQueryFilters } from "@/features/filters/client";
import { FilterSearchParams } from "@/features/filters/server";

interface Props {
  searchParams: FilterSearchParams;
}

export const SidebarFilters: FC<Props> = ({ searchParams }) => {
  const t = useTranslations("Filters");
  const { langParams, areaParams, updateLangParams, updateAreaParams } =
    useQueryFilters(searchParams);

  return (
    <Card className={cn("w-80 sticky top-16 self-start")}>
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
    </Card>
  );
};
