import { useQuery } from "@tanstack/react-query";
import { kindergartenService } from "../services/kindergartenService";

export const useGetKindergarten = ({
  locale,
  id,
}: {
  locale: Locale;
  id: string | number;
}) => {
  return useQuery({
    queryKey: ["kindergartens", locale, id],
    queryFn: () => kindergartenService.getById(locale, id),
  });
};
