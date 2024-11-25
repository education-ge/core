import { axiosInstance } from "@/shared/api/axios";
import { Locale } from "@/shared/types/language";
import { SchoolId } from "@/shared/types/school";
import { School } from "../types/school";

export const schoolApi = async (
  locale: Locale,
  id: SchoolId,
): Promise<School> => {
  try {
    const response = await axiosInstance.get<School>(
      `/${locale}/institutions/schools/${id}`,
    );
    return response.data;
  } catch (error) {
    console.error("Api error:", error);
    throw error;
  }
};
