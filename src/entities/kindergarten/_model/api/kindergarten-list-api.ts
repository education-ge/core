import { axiosInstance } from "@/shared/api/axios";
import { KindergartenList } from "../types/kindergarten";
import { Locale } from "@/shared/types/language";

export const kindergartenListApi = async (
  locale: Locale,
): Promise<KindergartenList> => {
  try {
    const response = await axiosInstance.get<KindergartenList>(
      `/${locale}/institutions/kindergartens`,
    );
    return response.data;
  } catch (error) {
    console.error("Api error:", error);
    throw error;
  }
};
