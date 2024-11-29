import { LanguageList, Locale } from "@/shared/types/language";

export const getLanguageList = async (
  locale: Locale,
): Promise<LanguageList> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await fetch(`${baseUrl}/${locale}/languages`, {
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
