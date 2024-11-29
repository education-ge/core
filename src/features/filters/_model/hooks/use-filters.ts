import { useCallback, useMemo, useState } from "react";
import { FilterSearchParams } from "../types/filters";
type FilterParams = Set<string>;

interface UseFiltersReturn {
  langParams: FilterParams;
  areaParams: FilterParams;
  updateLangParams: (value: string) => void;
  updateAreaParams: (value: string) => void;
  resetLangParams: () => void;
  resetAreaParams: () => void;
}

export const useFilters = (
  searchParams: FilterSearchParams,
): UseFiltersReturn => {
  const [langParams, setLangParams] = useState<FilterParams>(
    new Set(searchParams.lang?.split(",") || []),
  );

  const [areaParams, setAreaParams] = useState<FilterParams>(
    new Set(searchParams.area?.split(",") || []),
  );

  const toggleItem = useCallback(
    (
      set: FilterParams,
      value: string,
      setter: (newSet: FilterParams) => void,
    ) => {
      const newSet = new Set(set);
      if (newSet.has(value)) {
        newSet.delete(value);
      } else {
        newSet.add(value);
      }
      setter(newSet);
    },
    [],
  );

  const updateLangParams = useCallback(
    (value: string) => toggleItem(langParams, value, setLangParams),
    [langParams, toggleItem],
  );

  const updateAreaParams = useCallback(
    (value: string) => toggleItem(areaParams, value, setAreaParams),
    [areaParams, toggleItem],
  );

  const resetLangParams = useCallback(() => {
    setLangParams(new Set());
  }, []);

  const resetAreaParams = useCallback(() => {
    setAreaParams(new Set());
  }, []);

  return useMemo(
    () => ({
      langParams,
      areaParams,
      updateLangParams,
      updateAreaParams,
      resetLangParams,
      resetAreaParams,
    }),
    [
      langParams,
      areaParams,
      updateLangParams,
      updateAreaParams,
      resetLangParams,
      resetAreaParams,
    ],
  );
};
