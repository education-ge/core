import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui";
import { cn } from "@/shared/ui/utils";
import { getTranslations } from "next-intl/server";
import { LanguageFilter } from "@/features/filters/_ui/language-filter";
import { AreaFilter } from "@/features/filters/_ui/area-filter";
import { CityId } from "@/shared/types/city";

export async function Filters({ className }: { className?: string }) {
  const t = await getTranslations("Filters");

  return (
    <Card className={cn("w-80 sticky top-4 self-start", className)}>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
      </CardHeader>
      <CardContent>
        <LanguageFilter />
        <AreaFilter ciyId={1 as CityId} classNames="mt-5" />
        {/* <CheckboxGroup
          title={t("languages")}
          className="mt-5"
          limit={3}
          isLoading={isLanguagesLoading}
          // defaultItems={languages.map((item) => {
          //   return { text: item.name, value: item.id.toString() };
          // })}
          items={
            languages
              ? languages.map((item) => {
                  return { text: item.name, value: item.id.toString() };
                })
              : []
          }
          onClickCheckbox={filters.setSelectedLanguages}
          selected={filters.selectedLanguages}
          name="languages"
        />
        <CheckboxGroup
          title={t("areas")}
          className="mt-5"
          limit={5}
          isLoading={isAreasLoading}
          // defaultItems={areas.map((item) => {
          //   return { text: item.name, value: item.id.toString() };
          // })}
          items={
            areas
              ? areas.map((item) => {
                  return { text: item.name, value: item.id.toString() };
                })
              : []
          }
          onClickCheckbox={filters.setSelectedAreas}
          selected={filters.selectedAreas}
          name="areas"
        /> */}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          // disabled={isLanguagesLoading || isAreasLoading}
        >
          {t("clear")}
        </Button>
      </CardFooter>
    </Card>
  );
}
