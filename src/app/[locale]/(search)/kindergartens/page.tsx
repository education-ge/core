import { getKindergartenList } from "@/entities/kindergarten/server";
import { KindergartenListCard } from "@/features/kindergarten/server";
import { Locale } from "@/shared/types/language";
import { Container } from "@/shared/ui";
import { Filters } from "@/widgets/filters";
import { InstitutionList } from "@/widgets/institution-list";
import { getTranslations } from "next-intl/server";

export async function generateStaticParams(): Promise<{ locale: Locale }[]> {
  return [{ locale: "en" }, { locale: "ge" }, { locale: "ru" }];
}

export const revalidate = 60;

export default async function KindergartensPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const t = await getTranslations("KindergartensPage");
  const locale = params.locale;

  const schools = await getKindergartenList(locale);

  return (
    <Container className="mt-4 flex">
      <Filters />
      <div className="flex-1 ml-4">
        <h1 className="font-semibold text-2xl mb-2">{t("title")}</h1>
        <InstitutionList>
          {schools.map((item) => (
            <KindergartenListCard key={item.id} kindergarten={item} />
          ))}
        </InstitutionList>
      </div>
    </Container>
  );
}
