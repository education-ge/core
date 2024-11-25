import { Container } from "@/shared/ui";
import { Filters } from "@/widgets/filters";
import { useTranslations } from "next-intl";

export default async function SchoolsPage() {
  const t = useTranslations("SchoolsPage");

  return (
    <Container className="mt-4 flex">
      <Filters />
      <div className="flex-1 ml-4">
        <h1 className="font-semibold text-2xl mb-2">{t("title")}</h1>
        hi
      </div>
    </Container>
  );
}
