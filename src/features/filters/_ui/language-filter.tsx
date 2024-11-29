"use client";

import { useTranslations } from "next-intl";
import { CheckboxGroup } from "./checkbox-group";
import { FC } from "react";
import { useGetLanguageList } from "@/entities/language/client";

interface Props {
  selectedLanguages: Set<string>;
  updateLanguages: (value: string) => void;
  classNames?: string;
}

export const LanguageFilter: FC<Props> = ({
  selectedLanguages,
  updateLanguages,
  classNames,
}) => {
  const t = useTranslations("Filters");

  const { data: languages, isLoading } = useGetLanguageList();

  return (
    <CheckboxGroup
      title={t("languages")}
      className={classNames}
      limit={3}
      isLoading={isLoading}
      items={
        languages
          ? languages.map((item) => ({
              text: item.name,
              value: item.id.toString(),
            }))
          : []
      }
      onClickCheckbox={updateLanguages}
      selected={selectedLanguages}
      name="languages"
    />
  );
};
