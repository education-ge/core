import { z } from "zod";
import { Locale } from "@/shared/types/language";
import { School } from "../types/school";
import { SchoolId } from "@/shared/types/school";
import { schoolSchema } from "../types/schema";
import { schoolApi } from "../api/school-api";

export const getSchool = async (
  locale: Locale,
  id: SchoolId,
): Promise<School> => {
  try {
    const data = await schoolApi(locale, id);

    const validatedData = schoolSchema.parse(data);

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
