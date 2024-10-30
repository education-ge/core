export interface Institution {
  id: number;
  type: InstitutionType;
  name: string;
  thumbnail: string | null;
  address: string;
  shortDescription?: string | null;
  description?: string | null;
  languageCodes: Locale[];
}
