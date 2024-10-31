import { useSearchParams } from "next/navigation";
import { useSet } from "react-use";
import { useMemo } from "react";
import { FiltersParamNames } from "./types/filters";

interface ReturnProps {
  selectedLanguages: Set<string>;
  setSelectedLanguages: (value: string) => void;
  selectedAreas: Set<string>;
  setSelectedAreas: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as URLSearchParams;

  const [selectedLanguages, { toggle: toggleLanguages }] = useSet(
    new Set(searchParams.get(FiltersParamNames.LANGUAGES)?.split(",") || []),
  );

  const [selectedAreas, { toggle: toggleAreas }] = useSet(
    new Set(searchParams.get(FiltersParamNames.AREAS)?.split(",") || []),
  );

  return useMemo(
    () => ({
      selectedLanguages,
      selectedAreas,
      setSelectedLanguages: toggleLanguages,
      setSelectedAreas: toggleAreas,
    }),
    [selectedLanguages, selectedAreas, toggleLanguages, toggleAreas],
  );
};
