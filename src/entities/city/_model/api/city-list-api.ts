import { Locale } from "@/shared/types/language";
import { CityList } from "../types/city";

export const cityListApi = async (locale: Locale): Promise<CityList> => {
  try {
    const response = await fetch(`/${locale}/cities`);
    return response.json();
  } catch (error) {
    console.error("Api error:", error);
    throw error;
  }
};
