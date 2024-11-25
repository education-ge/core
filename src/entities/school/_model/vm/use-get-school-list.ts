import { useQuery } from "@tanstack/react-query";
import { getSchoolList } from "../services/get-school-list";
import { useLocale } from "next-intl";

export const useGetSchoolList = () => {
  const locale = useLocale();

  return useQuery({
    queryKey: ["schools", locale],
    queryFn: () => getSchoolList(locale),
  });
};
