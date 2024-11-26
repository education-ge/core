import { Locale } from "@/shared/types/language";
import { KindergartenList } from "../types/kindergarten";

export const getKindergartenList = async (
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
