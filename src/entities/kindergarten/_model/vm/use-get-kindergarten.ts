import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import { getKindergarten } from "../services/get-kindergarten";
import { KindergartenId } from "@/shared/types/kindergarten";

export const useGetKindergarten = (id: KindergartenId) => {
  const locale = useLocale();

  return useQuery({
    queryKey: ["kindergartens", locale, id],
    queryFn: () => getKindergarten(locale, id),
  });
};
