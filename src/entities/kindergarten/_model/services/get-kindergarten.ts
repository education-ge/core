import { z } from "zod";
import { Locale } from "@/shared/types/language";
import { Kindergarten } from "../types/kindergarten";
import { kindergartenApi } from "../api/kindergarten-api";
import { KindergartenId } from "@/shared/types/kindergarten";
import { kindergartenSchema } from "../types/schema";

export const getKindergarten = async (
  locale: Locale,
  id: KindergartenId,
): Promise<Kindergarten> => {
  try {
    const data = await kindergartenApi(locale, id);

    const validatedData = kindergartenSchema.parse(data);

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
