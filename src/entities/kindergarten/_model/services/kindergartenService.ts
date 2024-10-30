import { axiosInstance } from "@/shared/api/axios";
import { KindergartenApiRoutes } from "../constants";
import { Institution } from "@/entities/institution/client";

class KindergartenService {
  async getKindergartens(locale: Locale): Promise<Institution[]> {
    try {
      const response = await axiosInstance.get<Institution[]>(
        `${locale}/${KindergartenApiRoutes.GET_ALL}`,
      );
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
}

export const kindergartenService = new KindergartenService();
