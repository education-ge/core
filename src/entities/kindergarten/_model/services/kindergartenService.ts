import { axiosInstance } from "@/shared/api/axios";
import { Institution } from "@/entities/institution/client";
import { Kindergarten } from "../domain/kindergarten";

class KindergartenService {
  async getAll(locale: Locale): Promise<Institution[]> {
    try {
      const response = await axiosInstance.get<Institution[]>(
        `${locale}/institutions/kindergartens`,
      );
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  async getById(locale: Locale, id: string | number): Promise<Kindergarten> {
    try {
      const response = await axiosInstance.get<Kindergarten>(
        `${locale}/institutions/kindergartens/${id}`,
      );
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
}

export const kindergartenService = new KindergartenService();
