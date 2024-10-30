import { Institution } from "@/entities/institution/client";
import { db } from "@/shared/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { InstitutionLocaleFieldNames } from "../../types";

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("query") || "";
  const locale = req.nextUrl.pathname.split("/")[2] as Locale;

  const fieldNames = {
    name: `name_${locale}` as InstitutionLocaleFieldNames,
    address: `address_${locale}` as InstitutionLocaleFieldNames,
    shortDescription:
      `shortDescription_${locale}` as InstitutionLocaleFieldNames,
    description: `description_${locale}` as InstitutionLocaleFieldNames,
  };

  const kindergartens: Institution[] = await db.kindergartenTranslation
    .findMany({
      where: {
        OR: [
          { [fieldNames.name]: { contains: query, mode: "insensitive" } },
          { [fieldNames.address]: { contains: query, mode: "insensitive" } },
          {
            [fieldNames.shortDescription]: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            [fieldNames.description]: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
      include: {
        kindergarten: { include: { languages: true } },
      },
      take: 5,
    })
    .then((result) =>
      result.map((translation) => ({
        id: translation.kindergarten?.id ?? 0,
        type: "kindergarten",
        name: translation[fieldNames.name] || "",
        thumbnail: translation.kindergarten?.thumbnail || null,
        address: translation[fieldNames.address] || "",
        shortDescription: translation[fieldNames.shortDescription] || null,
        description: translation[fieldNames.description] || null,
        languageCodes:
          translation.kindergarten?.languages.map(
            (lang) => lang.code as Locale,
          ) || [],
      })),
    );

  return NextResponse.json(kindergartens);
}
