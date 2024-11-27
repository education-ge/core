import { getSchoolList } from "@/entities/school/server";
import { Locale } from "@/shared/types/language";
import { Container } from "@/shared/ui";
import { Filters } from "@/widgets/filters";
import { InstitutionList } from "@/widgets/institution-list";

export default async function SchoolsPage({
  params,
}: {
  params: Promise<{
    locale: Locale;
  }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  const schools = await getSchoolList(locale);

  return (
    <Container className="mt-4 flex">
      <Filters />
      <div className="flex-1 ml-4">
        <InstitutionList>
          {schools.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </InstitutionList>
      </div>
    </Container>
  );
}
