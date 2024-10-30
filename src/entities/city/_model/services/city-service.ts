import { axiosInstance } from "@/shared/api/axios";
import { City } from "../domain/city";
import { CityApiRoutes } from "../constants";

class CityService {
  async getCities(locale: Locale): Promise<City[]> {
    try {
      const response = await axiosInstance.get<City[]>(
        `${locale}/${CityApiRoutes.GET_CITIES}`,
      );
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
}

export const cityService = new CityService();
