import { useEffect, useRef } from "react";
import qs from "qs";
import { Filters, FiltersParamNames } from "./types/filters";
import { useRouter } from "@/shared/i18n/routing";

export const useQueryFilters = (filters: Filters) => {
  const isMounted = useRef(false);
  const router = useRouter();

  useEffect(() => {
    if (isMounted.current) {
      const params = {
        [FiltersParamNames.LANGUAGES]: Array.from(filters.selectedLanguages),
        [FiltersParamNames.AREAS]: Array.from(filters.selectedAreas),
      };

      const query = qs.stringify(params, {
        arrayFormat: "comma",
      });

      router.push(`?${query}`, {
        scroll: false,
      });
    }

    isMounted.current = true;
  }, [filters, router]);
};
