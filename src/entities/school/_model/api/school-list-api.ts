import { axiosInstance } from "@/shared/api/axios";

import { Locale } from "@/shared/types/language";
import { SchoolList } from "../types/school";

export const schoolListApi = async (locale: Locale): Promise<SchoolList> => {
  try {
    const response = await axiosInstance.get<SchoolList>(
      `/${locale}/institutions/schools`,
    );
    return response.data;
  } catch (error) {
    console.error("Api error:", error);
    throw error;
  }
};
