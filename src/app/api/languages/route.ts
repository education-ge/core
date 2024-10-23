import { db } from "@/shared/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const languages = await db.language.findMany({});

  return NextResponse.json(languages);
}
