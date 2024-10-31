import { Area } from "@/entities/city/client";
import { db } from "@/shared/lib/db";
import { NextRequest, NextResponse } from "next/server";

type AreaNameField = `name_${Locale}`;

export async function GET(req: NextRequest) {
  const pathSegments = req.nextUrl.pathname.split("/");
  const locale = pathSegments[2] as Locale;
  const cityId = parseInt(pathSegments[4], 10);

  if (!cityId) {
    return NextResponse.json({ error: "City ID is required" }, { status: 400 });
  }

  const fieldNames = {
    name: `name_${locale}` as AreaNameField,
  };

  const areas: Area[] = await db.area
    .findMany({
      where: {
        cityId: cityId,
      },
    })
    .then((result) =>
      result.map((city) => ({
        id: city.id,
        name: city[fieldNames.name],
      })),
    );

  return NextResponse.json(areas);
}
