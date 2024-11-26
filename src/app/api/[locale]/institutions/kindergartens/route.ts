import { NextRequest, NextResponse } from "next/server";
import { kindergartenListSchema } from "@/entities/kindergarten/server";

export async function GET(req: NextRequest) {
  try {
    const locale = req.nextUrl.pathname.split("/")[2];

    const res = await fetch(`/${locale}/institutions/kindergartens`);

    const data = res.json();

    const result = kindergartenListSchema.safeParse(data);

    if (!result.success) {
      console.error("Validation errors:", result.error.errors);
      return NextResponse.json(
        { message: "Invalid data received", errors: result.error.errors },
        { status: 400 },
      );
    }

    return NextResponse.json(result.data);
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.error();
  }
}
