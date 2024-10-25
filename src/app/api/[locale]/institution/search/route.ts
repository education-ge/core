import { InstitutionListItem } from "@/entities/institution";
import { db } from "@/shared/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { LocaleFieldNames } from "../../../types";

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("query") || "";
  const locale = req.nextUrl.pathname.split("/")[2] as Locale;

  const fieldNames = {
    name: `name_${locale}` as LocaleFieldNames,
    address: `address_${locale}` as LocaleFieldNames,
    shortDescription: `shortDescription_${locale}` as LocaleFieldNames,
    description: `description_${locale}` as LocaleFieldNames,
  };

  const kindergartens: InstitutionListItem[] = await db.kindergartenTranslation
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
        kindergarten: true,
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
      })),
    );

  const schools: InstitutionListItem[] = await db.schoolTranslation
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
        school: true,
      },
      take: 5,
    })
    .then((result) =>
      result.map((translation) => ({
        id: translation.school?.id ?? 0,
        type: "school",
        name: translation[fieldNames.name] || "",
        thumbnail: translation.school?.thumbnail || null,
        address: translation[fieldNames.address] || "",
        shortDescription: translation[fieldNames.shortDescription] || null,
        description: translation[fieldNames.description] || null,
      })),
    );

  const institutions = [...kindergartens, ...schools];

  return NextResponse.json(institutions);
}
