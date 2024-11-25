import { z } from "zod";
import { Locale } from "@/shared/types/language";
import { SchoolList } from "../types/school";
import { schoolListApi } from "../api/school-list-api";
import { schoolListSchema } from "../types/schema";

export const getSchoolList = async (locale: Locale): Promise<SchoolList> => {
  try {
    const data = await schoolListApi(locale);

    const validatedData = schoolListSchema.parse(data);

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
