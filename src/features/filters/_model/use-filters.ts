// import { Filters, FiltersParamNames } from "./types/filters";

// export const getFiltersFromQuery = (): Filters => {
//   const searchParams = new URLSearchParams(window.location.search);

//   return {
//     selectedLanguages: new Set(
//       (searchParams.get(FiltersParamNames.LANGUAGES) || "").split(",").filter(Boolean),
//     ),
//     selectedAreas: new Set(
//       (searchParams.get(FiltersParamNames.AREAS) || "").split(",").filter(Boolean),
//     ),
//   };
// };

// export const updateQueryFilters = (filters: Filters) => {
//   const params = new URLSearchParams(window.location.search);

//   params.set(
//     FiltersParamNames.LANGUAGES,
//     Array.from(filters.selectedLanguages).join(","),
//   );
//   params.set(
//     FiltersParamNames.AREAS,
//     Array.from(filters.selectedAreas).join(","),
//   );

//   window.history.replaceState({}, "", `?${params.toString()}`);
// };
