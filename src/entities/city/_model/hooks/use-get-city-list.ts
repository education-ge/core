"use client";

import { Locale } from "@/shared/types/language";
import { useLocale } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { getCityList } from "../services/get-city-list";

export const useGetCityList = () => {
  const locale = useLocale() as Locale;

  const query = useQuery({
    queryKey: ["cities", locale],
    queryFn: () => getCityList(locale),
  });

  return query;
};
