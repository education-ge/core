export interface Filters {
  selectedLanguages: Set<string>;
  selectedAreas: Set<string>;
}

export enum FiltersParamNames {
  AREAS = "area",
  LANGUAGES = "lang",
}
