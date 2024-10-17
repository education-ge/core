import { Container } from "@/shared/ui";
import { Filters } from "@/widgets/filters";
import { SchoolList } from "@/widgets/school-list";
import { useTranslations } from "next-intl";

export default function KindergartensPage() {
  const t = useTranslations("HomePage");

  return (
    <Container className="mt-4 flex">
      <Filters />

      <div className="flex-1 ml-4">
        <h1 className="font-semibold text-2xl">{t("title")}</h1>
        <SchoolList />
      </div>
    </Container>
  );
}
