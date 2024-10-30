"use client";

import { Institution } from "@/entities/institution/client";
import { schoolService } from "@/entities/school/client";
import { Container } from "@/shared/ui";
import { Filters } from "@/widgets/filters";
import { InstitutionList } from "@/widgets/institution-list";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function SchoolsPage() {
  const t = useTranslations("SchoolsPage");
  const locale = useLocale();

  const [schools, setSchools] = useState<Institution[]>([]);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const data = await schoolService.getSchools(locale);
        setSchools(data);
      } catch (err) {
        console.error("Failed to fetch languages:", err);
      }
    };

    fetchLanguages();
  }, [locale]);

  return (
    <Container className="mt-4 flex">
      <Filters />

      <div className="flex-1 ml-4">
        <h1 className="font-semibold text-2xl mb-2">{t("title")}</h1>
        <InstitutionList institutions={schools} />
      </div>
    </Container>
  );
}
