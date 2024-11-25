import { getKindergartenList } from "@/entities/kindergarten/server";
import { KindergartenListCard } from "@/features/kindergarten/server";
import { Container } from "@/shared/ui";
import { Filters } from "@/widgets/filters";
import { InstitutionList } from "@/widgets/institution-list";
import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";

export default async function KindergartensPage({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const t = useTranslations("KindergartensPage");

  let kindergartens;

  try {
    console.log("Fetching kindergartens...");
    kindergartens = await getKindergartenList("en", searchParams);
    if (!kindergartens || kindergartens.length === 0) {
      return (
        <Container className="mt-4 flex">
          <p>Данные о детских садах отсутствуют.</p>
        </Container>
      );
    }
    console.log("Fetched kindergartens:", kindergartens);
  } catch (error) {
    console.error("Error loading kindergartens:", error);
    return (
      <Container className="mt-4 flex">
        <p>Не удалось загрузить данные. Попробуйте позже.</p>
      </Container>
    );
  }

  if (!kindergartens || kindergartens.length === 0) {
    return (
      <Container className="mt-4 flex">
        <p>Данные о детских садах отсутствуют.</p>
      </Container>
    );
  }

  return (
    <Container className="mt-4 flex">
      <Filters />
      <div className="flex-1 ml-4">
        <h1 className="font-semibold text-2xl mb-2">{t("title")}</h1>
        <InstitutionList>
          {kindergartens.map((item) => (
            <KindergartenListCard key={item.id} kindergarten={item} />
          ))}
        </InstitutionList>
      </div>
    </Container>
  );
}
