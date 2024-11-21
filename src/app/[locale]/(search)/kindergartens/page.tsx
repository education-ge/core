"use client";

import { useGetKindergartens } from "@/entities/kindergarten/client";
import { Container } from "@/shared/ui";
import { Filters } from "@/widgets/filters";
import { InstitutionList } from "@/widgets/institution-list";
import { useLocale, useTranslations } from "next-intl";

export default function KindergartensPage() {
  const t = useTranslations("KindergartensPage");
  const locale = useLocale();

  const { data: kindergartens, isLoading } = useGetKindergartens({ locale });

  return (
    <Container className="mt-4 flex">
      <Filters />
      <div className="flex-1 ml-4">
        <h1 className="font-semibold text-2xl mb-2">{t("title")}</h1>
        <InstitutionList institutions={kindergartens} isLoading={isLoading} />
      </div>
    </Container>
  );
}
