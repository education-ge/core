import { axiosInstance } from "@/shared/api/axios";
import { InstitutionApiRoutes } from "../constants";
import { InstitutionListItem } from "../domain/institution";

class InstitutionService {
  async searchByText(
    locale: Locale,
    query: string,
  ): Promise<InstitutionListItem[]> {
    try {
      const response = await axiosInstance.get<InstitutionListItem[]>(
        `${locale}/${InstitutionApiRoutes.BY_TEXT}`,
        {
          params: { query },
        },
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching institutions by text:", error);
      throw error;
    }
  }

  async getRandom(locale: Locale, count: number = 5): Promise<InstitutionListItem[]> {
    try {
      const response = await axiosInstance.get<InstitutionListItem[]>(
        `${locale}/${InstitutionApiRoutes.RANDOM}`,
        {
          params: { count },
        },
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching random institutions:", error);
      throw error;
    }
  }
}

export const institutionService = new InstitutionService();
