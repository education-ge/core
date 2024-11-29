import { getSchoolList } from "@/entities/school/server";
import { Locale } from "@/shared/types/language";
import { Container } from "@/shared/ui";
import { Filters } from "@/widgets/filters/server";
import { InstitutionList } from "@/widgets/institution-list";

export default async function SchoolsPage({
  params,
  searchParams,
}: {
  params: Promise<{
    locale: Locale;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const locale = resolvedParams.locale;

  const schools = await getSchoolList(locale);

  return (
    <Container className="mt-4 flex">
      <Filters searchParams={resolvedSearchParams} />
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
