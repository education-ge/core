import { citySchema, areaSchema } from "@/shared/types/city";
import { institutionSocialsSchema } from "@/shared/types/institution";
import { schoolIdSchema } from "@/shared/types/school";
import { languageSchema } from "@/shared/types/language";
import { z } from "zod";

export const schoolListItemSchema = z.object({
  id: schoolIdSchema,
  name: z.string(),
  address: z.string(),
  description: z.string(),
  thumbnail: z.string().nullable(),
  languages: z.array(languageSchema),
});

export const schoolSchema = z.object({
  id: schoolIdSchema,
  name: z.string(),
  address: z.string(),
  description: z.string(),
  thumbnail: z.string().nullable(),
  languages: z.array(languageSchema),
  socials: institutionSocialsSchema,
  phone: z.string(),
  email: z.string().email(),
  website: z.string().url(),
  openingHours: z.array(z.string()).max(7),
  city: citySchema,
  area: areaSchema,
});

export const schoolListSchema = z.array(schoolListItemSchema);
