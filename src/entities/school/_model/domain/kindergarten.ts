import { Language } from "@/entities/language/client";

export interface School {
  id: number;

  name: string;
  address: string;
  shortDescription: string;
  description: string;

  thumbnail: string;
  phone: string;
  email: string;
  website: string;
  languages: Language[];

  facebook: string;
  instagram: string;
  twitter: string;
  youtube: string;
  telegram: string;
  whatsapp: string;
  viber: string;

  cityId: number;
  areaId: number;
}
