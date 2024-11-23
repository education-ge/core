import { useQuery } from "@tanstack/react-query";
import { getCityList } from "../services/get-city-list";
import { useLocale } from "next-intl";

export const useGetCityList = () => {
  const locale = useLocale();

  return useQuery({
    queryKey: ["cities", locale],
    queryFn: () => getCityList(locale),
  });
};
