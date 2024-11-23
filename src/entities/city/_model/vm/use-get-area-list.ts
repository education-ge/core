import { useQuery } from "@tanstack/react-query";
import { getAreaList } from "../services/get-area-list";
import { useLocale } from "next-intl";
import { CityId } from "@/shared/types/city";

export const useGetAreaList = (id: CityId) => {
  const locale = useLocale();

  return useQuery({
    queryKey: ["cities", locale, id],
    queryFn: () => getAreaList(locale, id),
  });
};
