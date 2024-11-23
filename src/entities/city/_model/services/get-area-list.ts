import { z } from "zod";
import { Locale } from "@/shared/types/language";
import { AreaList } from "../types/city";
import { areaListApi } from "../api/area-list-api";
import { areaListSchema } from "../types/schema";
import { CityId } from "@/shared/types/city";

export const getAreaList = async (
  locale: Locale,
  id: CityId,
): Promise<AreaList> => {
  try {
    const data = await areaListApi(locale, id);

    const validatedData = areaListSchema.parse(data);

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
