import { Link } from "@/shared/i18n/routing";
import { Button, Container } from "@/shared/ui";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function HomePage() {
  const tCommon = useTranslations("Common");
  const t = useTranslations("HomePage");

  return (
    <Container className="mt-4 flex flex-col items-center">
      <h1 className="font-semibold text-2xl mb-8 text-center">{t("title")}</h1>
      <div className="justify-center">
        {/* <SearchInput className="w-[600px] border-black border-2 rounded-lg" /> */}
      </div>
      <div className="flex gap-8 justify-center mt-24">
        <Link href="/kindergartens">
          <Button
            className="w-80 h-40 font-semibold text-2xl gap-4 border-2 border-black"
            variant={"outline"}
          >
            <Image
              src={"/svg/kindergarten.svg"}
              alt="kindergarten-icon"
              width={40}
              height={40}
            />
            {tCommon("kindergartens")}
          </Button>
        </Link>
        <Link href="/schools">
          <Button
            className="w-80 h-40 font-semibold text-2xl gap-4 border-2 border-black"
            variant={"outline"}
          >
            <Image
              src={"/svg/school.svg"}
              alt="kindergarten-icon"
              width={40}
              height={40}
            />
            {tCommon("schools")}
          </Button>
        </Link>
      </div>
    </Container>
  );
}
