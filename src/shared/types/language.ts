import { z } from "zod";

export const languageIdSchema = z.number().brand("LanguageId");
export type LanguageId = z.infer<typeof languageIdSchema>;

const locales = ["en", "ge", "ru"] as const;

export const localeSchema = z.enum(locales);
export type Locale = z.infer<typeof localeSchema>;

export const languageSchema = z.object({
  id: languageIdSchema,
  code: localeSchema,
  name: z.string(),
});
export type Language = z.infer<typeof languageSchema>;
