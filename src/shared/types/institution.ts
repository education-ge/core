import { z } from "zod";

export const institutionIdSchema = z.number().brand("InstitutionId");
export type InstitutionId = z.infer<typeof institutionIdSchema>;

export const institutionTypeSchema = z.union([
  z.literal("kindergarten"),
  z.literal("school"),
]);
export type InstitutionType = z.infer<typeof institutionTypeSchema>;

export const institutionListItemSchema = z.object({
  name: z.string(),
  description: z.string(),
  thumbnail: z.string(),
  type: institutionTypeSchema,
});
export type InstitutionListItem = z.infer<typeof institutionListItemSchema>;

export const institutionSocialsSchema = z.object({
  facebook: z.string().url(),
  instagram: z.string().url(),
  twitter: z.string().url(),
  youtube: z.string().url(),
  telegram: z.string().url(),
  whatsapp: z.string().url(),
  viber: z.string().url(),
});
export type institutionSocials = z.infer<typeof institutionSocialsSchema>;
