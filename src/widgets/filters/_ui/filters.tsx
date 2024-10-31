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
import { FC, useEffect, useState } from "react";
import { Language, languageService } from "@/entities/language/client";
import { useLocale, useTranslations } from "next-intl";
import { useFilters } from "../_model/use-filters";
import { Area, areaService } from "@/entities/city/client";
import { useQueryFilters } from "../_model/use-filters-query";

interface Props {
  className?: string;
}

export const Filters: FC<Props> = ({ className }) => {
  const t = useTranslations("Filters");
  const locale = useLocale();
  const filters = useFilters();

  useQueryFilters(filters);

  const [languages, setLanguages] = useState<Language[]>([]);
  const [areas, setAreas] = useState<Area[]>([]);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const data = await languageService.getLanguages(locale);
        setLanguages(data);
      } catch (err) {
        console.error("Failed to fetch languages:", err);
      }
    };

    const fetchAreas = async () => {
      try {
        const data = await areaService.getCityAreas(locale, 1);
        setAreas(data);
      } catch (err) {
        console.error("Failed to fetch languages:", err);
      }
    };

    fetchLanguages();
    fetchAreas();
  }, [locale, setLanguages]);

  return (
    <Card className={cn("w-80 sticky top-[72px] self-start", className)}>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
      </CardHeader>
      <CardContent>
        <CheckboxGroup
          title={t("languages")}
          className="mt-5"
          limit={5}
          // isLoading
          // defaultItems={languages.map((item) => {
          //   return { text: item.name, value: item.id.toString() };
          // })}
          items={languages.map((item) => {
            return { text: item.name, value: item.id.toString() };
          })}
          onClickCheckbox={filters.setSelectedLanguages}
          selected={filters.selectedLanguages}
          name="languages"
        />
        <CheckboxGroup
          title={t("areas")}
          className="mt-5"
          limit={5}
          // isLoading
          // defaultItems={areas.map((item) => {
          //   return { text: item.name, value: item.id.toString() };
          // })}
          items={areas.map((item) => {
            return { text: item.name, value: item.id.toString() };
          })}
          onClickCheckbox={filters.setSelectedAreas}
          selected={filters.selectedAreas}
          name="areas"
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">{t("clear")}</Button>
      </CardFooter>
    </Card>
  );
};
