import { LanguageApiRoutes } from "../constants/index";
import { axiosInstance } from "@/shared/api/axios";
import { Kindergarten } from "@prisma/client";

export const getLanguages = async (query: string): Promise<Kindergarten[]> => {
  const { data } = await axiosInstance.get<Kindergarten[]>(
    LanguageApiRoutes.GET_LANGUAGES,
    { params: { query } },
  );

  return data;
};
