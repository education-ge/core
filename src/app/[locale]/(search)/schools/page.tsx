import { getSchoolList } from "@/entities/school/server";
import { Locale } from "@/shared/types/language";
import { Container } from "@/shared/ui";
import { Filters } from "@/widgets/filters";
import { InstitutionList } from "@/widgets/institution-list";
import { getTranslations } from "next-intl/server";

export default async function SchoolsPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const t = await getTranslations("SchoolsPage");
  const locale = params.locale;

  const schools = await getSchoolList(locale);

  return (
    <Container className="mt-4 flex">
      <Filters />
      <div className="flex-1 ml-4">
        <h1 className="font-semibold text-2xl mb-2">{t("title")}</h1>
        <InstitutionList>
          {schools.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </InstitutionList>
      </div>
    </Container>
  );
}
