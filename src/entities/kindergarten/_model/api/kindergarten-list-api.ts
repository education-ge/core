import { axiosInstance } from "@/shared/api/axios";
import { KindergartenList } from "../types/kindergarten";
import { Locale } from "@/shared/types/language";

export const kindergartenListApi = async (
  locale: Locale,
  filters: Record<string, string>,
): Promise<KindergartenList> => {
  console.log(filters);
  try {
    const response = await axiosInstance.get<KindergartenList>(
      `/${locale}/institutions/kindergartens`,
      // { params: filters },
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch kindergarten list: ${error}`);
  }
};
