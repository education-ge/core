import { axiosInstance } from "@/shared/api/axios";
import { SchoolApiRoutes } from "../constants";
import { Institution } from "@/entities/institution/client";

class SchoolService {
  async getSchools(locale: Locale): Promise<Institution[]> {
    try {
      const response = await axiosInstance.get<Institution[]>(
        `${locale}/${SchoolApiRoutes.GET_ALL}`,
      );
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
}

export const schoolService = new SchoolService();
