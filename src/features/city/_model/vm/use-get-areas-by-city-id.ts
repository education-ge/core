import { areaService } from "@/entities/city/client";
import { useQuery } from "@tanstack/react-query";

export const useGetAreasByCityId = ({
  locale,
  cityId,
}: {
  locale: Locale;
  cityId: number;
}) => {
  return useQuery({
    queryKey: ["areas", locale, cityId],
    queryFn: () => areaService.getCityAreas(locale, cityId),
    staleTime: 1000 * 60 * 60 * 24,
  });
};
