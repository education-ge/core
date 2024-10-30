import { Language } from "@/entities/language/client";

export interface Kindergarten {
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

  ageGroups: number[];
  openingHours: string[];
  teachersCount: number;
  groups: number;
  mealPlan: string[];
  sleepingPlaces: boolean;

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
