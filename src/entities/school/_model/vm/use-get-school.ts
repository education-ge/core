import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import { getSchool } from "../services/get-school";
import { SchoolId } from "@/shared/types/school";

export const useGetSchool = (id: SchoolId) => {
  const locale = useLocale();

  return useQuery({
    queryKey: ["schools", locale, id],
    queryFn: () => getSchool(locale, id),
  });
};
