import { axiosInstance } from "@/shared/api/axios";
import { Locale } from "@/shared/types/language";
import { CityList } from "../types/city";

export const cityListApi = async (locale: Locale): Promise<CityList> => {
  try {
    const response = await axiosInstance.get<CityList>(
      `/${locale}/institutions/cities`,
    );
    return response.data;
  } catch (error) {
    console.error("Api error:", error);
    throw error;
  }
};
