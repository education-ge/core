import { getKindergartenList } from "@/entities/kindergarten/server";
import { KindergartenListCard } from "@/features/kindergarten/server";
import { Locale } from "@/shared/types/language";
import { Container } from "@/shared/ui";
import { Filters } from "@/widgets/filters";
import { InstitutionList } from "@/widgets/institution-list";

export default async function KindergartensPage({
  params,
}: {
  params: Promise<{
    locale: Locale;
  }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  const schools = await getKindergartenList(locale);

  return (
    <Container className="mt-4 flex">
      <Filters />
      <div className="flex-1 ml-4">
        <InstitutionList>
          {schools.map((item) => (
            <KindergartenListCard key={item.id} kindergarten={item} />
          ))}
        </InstitutionList>
      </div>
    </Container>
  );
}
