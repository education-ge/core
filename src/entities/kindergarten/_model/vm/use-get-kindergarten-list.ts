import { useQuery } from "@tanstack/react-query";
import { getKindergartenList } from "../services/get-kindergarten-list";
import { useLocale } from "next-intl";

export const useGetKindergartenList = () => {
  const locale = useLocale();

  return useQuery({
    queryKey: ["kindergartens", locale],
    queryFn: () => getKindergartenList(locale),
  });
};
