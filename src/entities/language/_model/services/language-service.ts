import { axiosInstance } from "@/shared/api/axios";
import { Language } from "../domain/language";
import { LanguageApiRoutes } from "../constants";

class LanguageService {
  async getLanguages(): Promise<Language[]> {
    try {
      const response = await axiosInstance.get<Language[]>(
        LanguageApiRoutes.GET_LANGUAGES,
      );
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
}

export const languageService = new LanguageService();
