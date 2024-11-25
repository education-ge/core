import { Locale } from "@/shared/types/language";
import { Container } from "@/shared/ui";
import { useTranslations } from "next-intl";

export default async function SchoolsPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const t = useTranslations("SchoolsPage");

  return (
    <Container className="mt-4 flex">
      <div className="flex-1 ml-4">
        <h1 className="font-semibold text-2xl mb-2">{t("title")}</h1>
        <p>Current Locale: {params?.locale}</p>
      </div>
    </Container>
  );
}
