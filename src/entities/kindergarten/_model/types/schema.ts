import { citySchema, areaSchema } from "@/shared/types/city";
import { institutionSocialsSchema } from "@/shared/types/institution";
import { kindergartenIdSchema } from "@/shared/types/kindergarten";
import { languageSchema } from "@/shared/types/language";
import { z } from "zod";

export const kindergartenListItemSchema = z.object({
  id: kindergartenIdSchema,
  name: z.string(),
  address: z.string(),
  description: z.string(),
  thumbnail: z.string().nullable(),
  languages: z.array(languageSchema),
  ageGroups: z.array(z.number().min(0).max(10)),
});

export const kindergartenSchema = z.object({
  id: kindergartenIdSchema,
  name: z.string(),
  address: z.string(),
  description: z.string(),
  thumbnail: z.string().nullable(),
  languages: z.array(languageSchema),
  ageGroups: z.array(z.number().min(0).max(10)),
  socials: institutionSocialsSchema,
  phone: z.string(),
  email: z.string().email(),
  website: z.string().url(),
  openingHours: z.array(z.string()).max(7),
  city: citySchema,
  area: areaSchema,
});

export const kindergartenListSchema = z.array(kindergartenListItemSchema);
