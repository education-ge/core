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
import { CheckboxGroup } from "./checkbox-group";
import { FC } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useFilters } from "../_model/use-filters";
import { useQueryFilters } from "../_model/use-filters-query";
import { useGetLanguages } from "@/features/i18n/client";
import { useGetAreasByCityId } from "@/features/city/server";

interface Props {
  className?: string;
}

export const Filters: FC<Props> = ({ className }) => {
  const t = useTranslations("Filters");
  const locale = useLocale();
  const filters = useFilters();

  const { data: languages, isLoading: isLanguagesLoading } = useGetLanguages({
    locale,
  });
  const { data: areas, isLoading: isAreasLoading } = useGetAreasByCityId({
    locale,
    cityId: 1,
  });
  
  useQueryFilters(filters);

  return (
    <Card className={cn("w-80 sticky top-[72px] self-start", className)}>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
      </CardHeader>
      <CardContent>
        <CheckboxGroup
          title={t("languages")}
          className="mt-5"
          limit={3}
          isLoading={isLanguagesLoading}
          // defaultItems={languages.map((item) => {
          //   return { text: item.name, value: item.id.toString() };
          // })}
          items={
            languages
              ? languages.map((item) => {
                  return { text: item.name, value: item.id.toString() };
                })
              : []
          }
          onClickCheckbox={filters.setSelectedLanguages}
          selected={filters.selectedLanguages}
          name="languages"
        />
        <CheckboxGroup
          title={t("areas")}
          className="mt-5"
          limit={5}
          isLoading={isAreasLoading}
          // defaultItems={areas.map((item) => {
          //   return { text: item.name, value: item.id.toString() };
          // })}
          items={
            areas
              ? areas.map((item) => {
                  return { text: item.name, value: item.id.toString() };
                })
              : []
          }
          onClickCheckbox={filters.setSelectedAreas}
          selected={filters.selectedAreas}
          name="areas"
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          disabled={isLanguagesLoading || isAreasLoading}
        >
          {t("clear")}
        </Button>
      </CardFooter>
    </Card>
  );
};
