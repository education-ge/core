import { axiosInstance } from "@/shared/api/axios";
import { CityApiRoutes } from "../constants";
import { Area } from "../domain/area";

class AreaService {
  async getCityAreas(locale: Locale, cityId: number): Promise<Area[]> {
    try {
      const response = await axiosInstance.get<Area[]>(
        `${locale}/${CityApiRoutes.GET_CITIES}/${cityId}`,
      );
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
}

export const areaService = new AreaService();
