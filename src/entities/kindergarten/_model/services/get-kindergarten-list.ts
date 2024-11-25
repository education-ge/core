import { z } from "zod";
import { Locale } from "@/shared/types/language";
import { kindergartenListApi } from "../api/kindergarten-list-api";
import { KindergartenList } from "../types/kindergarten";
import { kindergartenListSchema } from "../types/schema";

export const getKindergartenList = async (
  locale: Locale,
  filters: Record<string, string>,
): Promise<KindergartenList> => {
  try {
    const data = await kindergartenListApi(locale, filters);

    const validatedData = kindergartenListSchema.parse(data);

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
