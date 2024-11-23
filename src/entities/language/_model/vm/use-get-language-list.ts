import { Locale } from "@/shared/types/language";
import { useQuery } from "@tanstack/react-query";
import { getLanguageList } from "../services/get-language-list";

export const useGetLanguageList = (locale: Locale) => {
  return useQuery({
    queryKey: ["languages", locale],
    queryFn: () => getLanguageList(locale),
    staleTime: 1000 * 60 * 60 * 24,
  });
};
