import { axiosInstance } from "@/shared/api/axios";
import { Kindergarten } from "../types/kindergarten";
import { Locale } from "@/shared/types/language";
import { KindergartenId } from "@/shared/types/kindergarten";

export const kindergartenApi = async (
  locale: Locale,
  id: KindergartenId,
): Promise<Kindergarten> => {
  try {
    const response = await axiosInstance.get<Kindergarten>(
      `/${locale}/institutions/kindergartens/${id}`,
    );
    return response.data;
  } catch (error) {
    console.error("Api error:", error);
    throw error;
  }
};
