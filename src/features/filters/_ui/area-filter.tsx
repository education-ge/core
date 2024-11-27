"use client";

import { useLocale, useTranslations } from "next-intl";
import { CheckboxGroup } from "./checkbox-group";
import { FC } from "react";
import { useGetAreaList } from "@/entities/city/client";
import { Locale } from "@/shared/types/language";
import { CityId } from "@/shared/types/city";

interface Props {
  ciyId: CityId;
  classNames?: string;
}

export const AreaFilter: FC<Props> = ({ ciyId, classNames }) => {
  const t = useTranslations("Filters");
  const locale = useLocale();

  const { data: areas, isLoading } = useGetAreaList(locale as Locale, ciyId);

  return (
    <CheckboxGroup
      title={t("areas")}
      className={classNames}
      limit={3}
      isLoading={isLoading}
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
      onClickCheckbox={() => console.log(123)}
      // selected={filters.selectedAreas}
      name="areas"
    />
  );
};
