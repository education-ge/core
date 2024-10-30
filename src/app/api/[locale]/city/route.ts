import { City } from "@/entities/city/client";
import { db } from "@/shared/lib/db";
import { NextRequest, NextResponse } from "next/server";

type CityNameField = `name_${Locale}`;

export async function GET(req: NextRequest) {
  const locale = req.nextUrl.pathname.split("/")[2] as Locale;

  const fieldNames = {
    name: `name_${locale}` as CityNameField,
  };

  const cities: City[] = await db.city.findMany().then((result) =>
    result.map((city) => ({
      id: city.id,
      name: city[fieldNames.name],
    })),
  );

  return NextResponse.json(cities);
}
