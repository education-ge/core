export interface InstitutionListItem {
  id: number;
  type: Institution;
  name: string;
  thumbnail: string | null;
  address: string;
  shortDescription?: string | null;
  description?: string | null;
}
