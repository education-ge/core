"use client";

import { Locale } from "@/shared/types/language";
import { useLocale } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { getLanguageList } from "../services/get-language-list";

export const useGetLanguageList = () => {
  const locale = useLocale();

  const query = useQuery({
    queryKey: ["languages", locale],
    queryFn: () => getLanguageList(locale as Locale),
  });

  return query;
};
