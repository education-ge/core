import { axiosInstance } from "@/shared/api/axios";
import { Kindergarten } from "@prisma/client";
import { KindergartenApiRoutes } from "../constants";

export const search = async (
  locale: Locale,
  query: string,
): Promise<Kindergarten[]> => {
  const { data } = await axiosInstance.get<Kindergarten[]>(
    `/${locale}/${KindergartenApiRoutes.SEARCH}`,
    { params: { query } },
  );

  return data;
};
