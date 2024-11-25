"use client";

import { useQuery } from "@tanstack/react-query";
import { getKindergartenList } from "../services/get-kindergarten-list";
import { Locale } from '@/shared/types/language'

export const useGetKindergartenList = (
  locale: Locale,
  filters: Record<string, string>,
  initialData?: unknown,
) => {
  return useQuery({
    queryKey: ["kindergartens", locale, filters],
    queryFn: () => getKindergartenList(locale, filters),
    initialData,
  });
};
