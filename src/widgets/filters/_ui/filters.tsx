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
import { FilterCheckbox } from "./filter-checkbox";
import { useLocale, useTranslations } from "next-intl";

interface Props {
  className?: string;
}

export const Filters: FC<Props> = ({ className }) => {
  const t = useTranslations("Filters");
  const locale = useLocale();

  const [languages, setLanguages] = useState<Language[]>([]);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const data = await languageService.getLanguages(locale);
        setLanguages(data);
      } catch (err) {
        console.error("Failed to fetch languages:", err);
      }
    };

    fetchLanguages();
  }, []);

  return (
    <Card className={cn("w-80 sticky top-[72px] self-start", className)}>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="font-bold mb-3">{t("languages")}</p>
        <div className="flex flex-col gap-2">
          {languages?.map((item) => {
            return (
              <FilterCheckbox
                key={item.id}
                text={item.name}
                value={item.code}
              />
            );
          })}
        </div>
        <CheckboxGroup
          title={t("areas")}
          className="mt-5"
          limit={5}
          // isLoading
          defaultItems={[
            {
              text: "Сабуртало",
              value: "1",
            },
            {
              text: "Ваке",
              value: "2",
            },
            {
              text: "Исани",
              value: "3",
            },
            {
              text: "Самгори",
              value: "4",
            },
            {
              text: "Варкетили",
              value: "5",
            },
            {
              text: "Дигоми",
              value: "6",
            },
          ]}
          items={[
            {
              text: "Сабуртало",
              value: "1",
            },
            {
              text: "Ваке",
              value: "2",
            },
            {
              text: "Исани",
              value: "3",
            },
            {
              text: "Самгори",
              value: "4",
            },
            {
              text: "Варкетили",
              value: "5",
            },
            {
              text: "Дигоми",
              value: "6",
            },
            {
              text: "Сабуртало",
              value: "1",
            },
            {
              text: "Ваке",
              value: "2",
            },
            {
              text: "Исани",
              value: "3",
            },
            {
              text: "Самгори",
              value: "4",
            },
            {
              text: "Варкетили",
              value: "5",
            },
            {
              text: "Дигоми",
              value: "6",
            },
          ]}
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">{t("clear")}</Button>
      </CardFooter>
    </Card>
  );
};
