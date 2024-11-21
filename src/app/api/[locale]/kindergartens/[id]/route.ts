import { InstitutionLocaleFieldNames } from "@/app/api/types";
import { db } from "@/shared/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const segments = req.nextUrl.pathname.split("/");
  const id = segments[segments.length - 1];

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  const numericId = Number(id);
  if (isNaN(numericId)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const locale = segments[2] as Locale;

  const fieldNames = {
    name: `name_${locale}` as InstitutionLocaleFieldNames,
    address: `address_${locale}` as InstitutionLocaleFieldNames,
    shortDescription:
      `shortDescription_${locale}` as InstitutionLocaleFieldNames,
    description: `description_${locale}` as InstitutionLocaleFieldNames,
  };

  const kindergarten = await db.kindergartenTranslation.findUnique({
    where: { kindergartenId: numericId },
    include: {
      kindergarten: { include: { languages: true } },
    },
  });

  if (!kindergarten) {
    return NextResponse.json(
      { error: "Kindergarten not found" },
      { status: 404 },
    );
  }

  const response = {
    id: kindergarten.kindergarten?.id ?? 0,
    type: "kindergarten",
    name: kindergarten[fieldNames.name] || "",
    thumbnail: kindergarten.kindergarten?.thumbnail || null,
    address: kindergarten[fieldNames.address] || "",
    shortDescription: kindergarten[fieldNames.shortDescription] || null,
    description: kindergarten[fieldNames.description] || null,
    languageCodes:
      kindergarten.kindergarten?.languages.map((lang) => lang.code as Locale) ||
      [],
  };

  return NextResponse.json(response);
}
