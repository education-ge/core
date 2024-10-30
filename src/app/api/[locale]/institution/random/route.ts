import { Institution } from "@/entities/institution/client";
import { db } from "@/shared/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { InstitutionLocaleFieldNames } from "../../../types";

export async function GET(req: NextRequest) {
  const locale = req.nextUrl.pathname.split("/")[2] as Locale;
  const countParam = req.nextUrl.searchParams.get("count");
  const count = countParam ? parseInt(countParam) : 5;

  const fieldNames = {
    name: `name_${locale}` as InstitutionLocaleFieldNames,
    address: `address_${locale}` as InstitutionLocaleFieldNames,
    shortDescription:
      `shortDescription_${locale}` as InstitutionLocaleFieldNames,
    description: `description_${locale}` as InstitutionLocaleFieldNames,
  };

  const totalCount = await db.kindergarten.count();
  const takeCount = Math.min(count, totalCount);

  const randomKindergartens = await db.kindergarten.findMany({
    take: takeCount,
    skip: Math.floor(Math.random() * (totalCount - takeCount)),
  });

  const translations = await db.kindergartenTranslation.findMany({
    where: {
      kindergartenId: { in: randomKindergartens.map((k) => k.id) },
    },
  });

  const institutions: Institution[] = randomKindergartens.map(
    (kindergarten) => {
      const translation = translations.find(
        (t) => t.kindergartenId === kindergarten.id,
      );

      return {
        id: kindergarten.id,
        type: "kindergarten",
        name: translation ? translation[fieldNames.name] || "" : "",
        thumbnail: kindergarten.thumbnail || null,
        address: translation ? translation[fieldNames.address] || "" : "",
        shortDescription: translation
          ? translation[fieldNames.shortDescription] || null
          : null,
        description: translation
          ? translation[fieldNames.description] || null
          : null,
      };
    },
  );

  return NextResponse.json(institutions);
}
