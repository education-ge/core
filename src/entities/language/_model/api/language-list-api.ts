import { Language, Locale } from "@/shared/types/language";

export const languageListApi = async (locale: Locale): Promise<Language[]> => {
  try {
    const response = await fetch(`/${locale}/languages`);
    return response.json();
  } catch (error) {
    console.error("Api error:", error);
    throw error;
  }
};
