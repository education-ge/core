"use client";

import { Locale } from "@/shared/types/language";
import { useQuery } from "@tanstack/react-query";
import { getAreaList } from "../services/get-area-list";
import { CityId } from "@/shared/types/city";

export const useGetAreaList = (locale: Locale, cityId: CityId) => {
  const query = useQuery({
    queryKey: ["cities", locale, cityId],
    queryFn: () => getAreaList(locale, cityId),
  });

  return query;
};
