import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { institutionService } from "../services/institution-service";

export const useGetInstitutionsByText = ({
  locale,
  searchText,
}: {
  locale: Locale;
  searchText: string;
}) => {
  return useQuery({
    queryKey: ["institutions", locale, searchText],
    queryFn: () => institutionService.searchByText(locale, searchText),
    placeholderData: keepPreviousData,
  });
};
