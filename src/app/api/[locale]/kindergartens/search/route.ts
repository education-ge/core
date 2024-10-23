import { db } from "@/shared/lib/db";
import { Kindergarten, KindergartenTranslation } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface KindergartenListItem {
  id: number;
  name: string;
  thumbnail: string;
  address: string;
  shortDescription?: string;
  description?: string;
}

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("query") || "";
  const locale = req.nextUrl.pathname.split("/")[2];
  const isEnLocale = locale === "en";

  const fieldNames = {
    name: `name_${locale}` as const,
    address: `address_${locale}` as const,
    shortDescription: `shortDescription_${locale}` as const,
    description: `description_${locale}` as const,
  };

  const kindergartens: (Kindergarten | KindergartenTranslation)[] = isEnLocale
    ? await db.kindergarten.findMany({
        where: {
          OR: [
            { name: { contains: query, mode: "insensitive" } },
            { address: { contains: query, mode: "insensitive" } },
            { shortDescription: { contains: query, mode: "insensitive" } },
            { description: { contains: query, mode: "insensitive" } },
          ],
        },
        take: 5,
      })
    : await db.kindergartenTranslation.findMany({
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
      });

  // TODO: fix types
  const response: KindergartenListItem[] = isEnLocale
    ? kindergartens.map((kindergarten) => ({
        id: kindergarten.id,
        thumbnail: kindergarten.thumbnail,
        name: kindergarten.name,
        address: kindergarten.address,
        shortDescription: kindergarten.shortDescription,
        description: kindergarten.description,
      }))
    : kindergartens.map((translation) => {
        const kindergarten = translation.kindergarten as Kindergarten;
        return {
          id: kindergarten.id,
          thumbnail: kindergarten.thumbnail,
          name: translation[fieldNames.name] || kindergarten.name,
          address: translation[fieldNames.address] || kindergarten.address,
          shortDescription:
            translation[fieldNames.shortDescription] ||
            kindergarten.shortDescription,
          description:
            translation[fieldNames.description] || kindergarten.description,
        };
      });

  return NextResponse.json(response);
}
