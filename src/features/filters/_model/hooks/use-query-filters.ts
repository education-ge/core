import { useEffect, useRef, useCallback } from "react";
import qs from "qs";
import { useRouter } from "@/shared/i18n/routing";
import { useFilters } from "./use-filters";
import { FilterSearchParams } from "../types/filters";

export const useQueryFilters = (searchParams: FilterSearchParams) => {
  const {
    langParams,
    areaParams,
    updateLangParams,
    updateAreaParams,
    resetLangParams,
    resetAreaParams,
  } = useFilters(searchParams);
  const isMounted = useRef(false);
  const router = useRouter();

  const clearQuery = useCallback(() => {
    resetLangParams();
    resetAreaParams();
    router.push("?", { scroll: false });
  }, [resetLangParams, resetAreaParams, router]);

  useEffect(() => {
    if (isMounted.current) {
      const queryObject: Record<string, string> = {};
      if (langParams.size > 0) {
        queryObject.lang = Array.from(langParams).join(",");
      }
      if (areaParams.size > 0) {
        queryObject.area = Array.from(areaParams).join(",");
      }

      if (Object.keys(queryObject).length > 0) {
        const query = qs.stringify(queryObject, { arrayFormat: "comma" });
        router.push(`?${query}`, { scroll: false });
      } else {
        router.push("?", { scroll: false });
      }
    } else {
      isMounted.current = true;
    }
  }, [langParams, areaParams, router]);

  return {
    langParams,
    areaParams,
    updateLangParams,
    updateAreaParams,
    clearQuery,
  };
};
