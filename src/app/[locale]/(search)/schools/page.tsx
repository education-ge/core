import { getSchoolList } from "@/entities/school/server";
import { FilterSearchParams } from "@/features/filters/server";
import { Locale } from "@/shared/types/language";
import { Container } from "@/shared/ui";
import { SidebarFilters } from "@/widgets/filters/client";
import { InstitutionList } from "@/widgets/institution-list";

export default async function SchoolsPage({
  params,
  searchParams,
}: {
  params: Promise<{
    locale: Locale;
  }>;
  searchParams: Promise<FilterSearchParams>;
}) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const locale = resolvedParams.locale;

  const schools = await getSchoolList(locale);

  return (
    <Container className="mt-4 flex">
      <SidebarFilters searchParams={resolvedSearchParams} />
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
