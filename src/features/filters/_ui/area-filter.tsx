"use client";

import { useTranslations } from "next-intl";
import { CheckboxGroup } from "./checkbox-group";
import { FC } from "react";
import { useGetAreaList } from "@/entities/city/client";

interface Props {
  selectedAreas: Set<string>;
  updateAreas: (value: string) => void;
  classNames?: string;
}

export const AreaFilter: FC<Props> = ({
  selectedAreas,
  updateAreas,
  classNames,
}) => {
  const t = useTranslations("Filters");

  const { data: areas, isLoading } = useGetAreaList();

  return (
    <CheckboxGroup
      title={t("areas")}
      className={classNames}
      limit={3}
      isLoading={isLoading}
      items={
        areas
          ? areas.map((item) => ({
              text: item.name,
              value: item.id.toString(),
            }))
          : []
      }
      onClickCheckbox={updateAreas}
      selected={selectedAreas}
      name="areas"
    />
  );
};
