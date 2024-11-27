"use client";

import { useTranslations } from "next-intl";
import { CheckboxGroup } from "./checkbox-group";
import { FC } from "react";
import { useGetLanguageList } from "@/entities/language/client";

interface Props {
  classNames?: string;
}

export const LanguageFilter: FC<Props> = ({ classNames }) => {
  const t = useTranslations("Filters");

  const { data: languages, isLoading } = useGetLanguageList();

  return (
    <CheckboxGroup
      title={t("languages")}
      className={classNames}
      limit={3}
      isLoading={isLoading}
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
      onClickCheckbox={() => console.log(123)}
      // selected={filters.selectedLanguages}
      name="languages"
    />
  );
};
