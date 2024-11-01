import { languageService } from "@/entities/language/client";
import { useQuery } from "@tanstack/react-query";

export const useGetLanguages = ({ locale }: { locale: Locale }) => {
  return useQuery({
    queryKey: ["languages", locale],
    queryFn: () => languageService.getLanguages({ locale }),
    staleTime: 1000 * 60 * 60 * 24,
  });
};
