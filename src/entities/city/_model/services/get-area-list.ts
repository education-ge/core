import { AreaList, CityId } from "@/shared/types/city";
import { Locale } from "@/shared/types/language";

export const getAreaList = async (
  locale: Locale,
  id: CityId,
): Promise<AreaList> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await fetch(`${baseUrl}/${locale}/cities/${id}/areas`, {
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
