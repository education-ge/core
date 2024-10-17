import { db } from "@/shared/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const cities = await db.city.findMany();

  return NextResponse.json(cities);
}
