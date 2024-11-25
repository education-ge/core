import { SchoolList } from "../types/school";
import { Locale } from "@/shared/types/language";

export const schoolListApi = async (locale: Locale): Promise<SchoolList> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await fetch(`${baseUrl}/${locale}/institutions/schools`);
    return response.json();
  } catch (error) {
    throw new Error(`Failed to fetch school list: ${error}`);
  }
};
