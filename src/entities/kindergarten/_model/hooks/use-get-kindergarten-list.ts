"use client";

import { Locale } from "@/shared/types/language";
import { useLocale } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { getKindergartenList } from "../services/get-kindergarten-list";

export const useGetKindergartenList = () => {
  const locale = useLocale();

  const query = useQuery({
    queryKey: ["languages", locale],
    queryFn: () => getKindergartenList(locale as Locale),
  });

  return query;
};
