import { KindergartenList } from "../types/kindergarten";
import { Locale } from "@/shared/types/language";

export const kindergartenListApi = async (
  locale: Locale,
): Promise<KindergartenList> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await fetch(
      `${baseUrl}/${locale}/institutions/kindergartens`,
      {
        cache: "force-cache",
        next: {
          revalidate: 3600,
        },
      },
    );
    return response.json();
  } catch (error) {
    throw new Error(`Failed to fetch kindergarten list: ${error}`);
  }
};
