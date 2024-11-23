import { z } from "zod";
import { Language, languageSchema, Locale } from "@/shared/types/language";
import { languageListApi } from "../api/language-list-api";

const languageListSchema = z.array(languageSchema);

export const getLanguageList = async (locale: Locale): Promise<Language[]> => {
  try {
    const data = await languageListApi(locale);

    const validatedData = languageListSchema.parse(data);

    return validatedData;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Zod error:", error.errors);
    } else {
      console.error("Error in service:", error);
    }

    throw error;
  }
};
