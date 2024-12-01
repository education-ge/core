import { getKindergartenList } from "@/entities/kindergarten/server";
import { FilterSearchParams } from "@/features/filters/server";
import { KindergartenListCard } from "@/features/kindergarten/server";
import { Locale } from "@/shared/types/language";
import { Container } from "@/shared/ui";
import { SidebarFilters } from "@/widgets/filters/client";
import { InstitutionList } from "@/widgets/institution-list";

export default async function KindergartensPage({
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

  const schools = await getKindergartenList(locale);

  return (
    <Container className="mt-4 flex">
      <SidebarFilters searchParams={resolvedSearchParams} />
      <div className="flex-grow ml-4">
        <InstitutionList>
          {schools.map((item) => (
            <KindergartenListCard key={item.id} kindergarten={item} />
          ))}
        </InstitutionList>
      </div>
    </Container>
  );
}
