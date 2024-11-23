import { axiosInstance } from "@/shared/api/axios";
import { Locale } from "@/shared/types/language";
import { AreaList } from "../types/city";
import { CityId } from "@/shared/types/city";

export const areaListApi = async (
  locale: Locale,
  id: CityId,
): Promise<AreaList> => {
  try {
    const response = await axiosInstance.get<AreaList>(
      `/${locale}/cities/${id}/areas`,
    );
    return response.data;
  } catch (error) {
    console.error("Api error:", error);
    throw error;
  }
};
