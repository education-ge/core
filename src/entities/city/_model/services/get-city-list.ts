import { z } from "zod";
import { Locale } from "@/shared/types/language";
import { CityList } from "../types/city";
import { cityListApi } from "../api/city-list-api";
import { cityListSchema } from "../types/schema";

export const getCityList = async (locale: Locale): Promise<CityList> => {
  try {
    const data = await cityListApi(locale);

    const validatedData = cityListSchema.parse(data);

    return validatedData;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Zod error:", error.errors);
    } else {
      console.error("Error in service:", error);
    }

    throw error;
  }
};
