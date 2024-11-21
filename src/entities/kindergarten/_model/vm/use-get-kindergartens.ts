import { useQuery } from "@tanstack/react-query";
import { kindergartenService } from "../services/kindergartenService";

export const useGetKindergartens = ({ locale }: { locale: Locale }) => {
  return useQuery({
    queryKey: ["kindergartens", locale],
    queryFn: () => kindergartenService.getAll(locale),
  });
};
