import { useQuery } from "@tanstack/react-query";
import { schoolService } from "../services/schoolService";

export const useGetSchools = ({ locale }: { locale: Locale }) => {
  return useQuery({
    queryKey: ["schools", locale],
    queryFn: () => schoolService.getSchools(locale),
  });
};
