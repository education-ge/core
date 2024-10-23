import { Link } from "@/shared/i18n/routing";
import { Button, Container, SearchInput } from "@/shared/ui";
import { School, Shapes } from "lucide-react";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <Container className="mt-4 flex flex-col items-center">
      <h1 className="font-semibold text-2xl mb-8 text-center">{t("title")}</h1>
      <div className="justify-center">
        <SearchInput className="w-[600px] border-blue-400 border-2 rounded-lg" />
      </div>
      <div className="flex gap-8 justify-center mt-24">
        <Link href="/kindergartens">
          <Button className="w-80 h-40 bg-green-500 hover:bg-green-600 font-semibold text-2xl gap-4">
            <Shapes size={40} />
            {t("kindergartens")}
          </Button>
        </Link>
        <Link href="/schools">
          <Button className="w-80 h-40 bg-blue-500 font-semibold text-2xl gap-4">
            <School size={40} />
            {t("schools")}
          </Button>
        </Link>
      </div>
    </Container>
  );
}
