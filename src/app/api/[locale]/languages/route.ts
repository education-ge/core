import { db } from "@/shared/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { Language } from "@/entities/language/client";

type LanguageNameField = `name_${Locale}`;

export async function GET(req: NextRequest) {
  const locale = req.nextUrl.pathname.split("/")[2] as Locale;

  const fieldNames = {
    name: `name_${locale}` as LanguageNameField,
  };

  const languages: Language[] = await db.language.findMany().then((result) =>
    result.map((language) => ({
      id: language.id,
      name: language[fieldNames.name],
      code: language.code,
    })),
  );

  return NextResponse.json(languages);
}
