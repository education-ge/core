import { axiosInstance } from "@/shared/api/axios";
import { Language, Locale } from "@/shared/types/language";

export const languageListApi = async (locale: Locale): Promise<Language[]> => {
  try {
    const response = await axiosInstance.get<Language[]>(
      `/${locale}/institutions/languages`,
    );
    return response.data;
  } catch (error) {
    console.error("Api error:", error);
    throw error;
  }
};
