import { CityList } from "@/shared/types/city";
import { Locale } from "@/shared/types/language";

export const getCityList = async (locale: Locale): Promise<CityList> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await fetch(`${baseUrl}/${locale}/cities`, {
      cache: "force-cache",
      next: {
        revalidate: 3600,
      },
    });
    return response.json();
  } catch (error) {
    console.error(`Failed to fetch kindergarten list: ${error}`);
    return [];
  }
};
