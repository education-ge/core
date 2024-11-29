"use client";

import { useQuery } from "@tanstack/react-query";
import { getAreaList } from "../services/get-area-list";
import { useLocale } from "next-intl";
import { Locale } from "@/shared/types/language";
import { CityId } from "@/shared/types/city";

export const useGetAreaList = () => {
  const locale = useLocale() as Locale;

  const query = useQuery({
    queryKey: ["cities", locale, 1],
    queryFn: () => getAreaList(locale, 1 as CityId),
  });

  return query;
};
