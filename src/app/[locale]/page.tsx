import { Container } from "@/shared/ui";
import { Filters } from "@/widgets/filters";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <Container className="mt-4 flex">
      <Filters />

      <div className="flex-1 ml-4">
        <h1 className="font-semibold text-2xl">{t("title")}</h1>
        MAIN PAGE
      </div>
    </Container>
  );
}
