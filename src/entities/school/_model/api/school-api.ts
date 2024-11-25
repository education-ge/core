import { Locale } from "@/shared/types/language";
import { SchoolId } from "@/shared/types/school";
import { School } from "../types/school";

export const schoolApi = async (
  locale: Locale,
  id: SchoolId,
): Promise<School> => {
  try {
    const response = await fetch(`/${locale}/institutions/schools/${id}`);
    return response.json();
  } catch (error) {
    console.error("Api error:", error);
    throw error;
  }
};
