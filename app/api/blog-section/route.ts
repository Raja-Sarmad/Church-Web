import { NextResponse } from "next/server";

import { getBlogSection } from "@/lib/sanity-site-data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") || "en";

  try {
    const data = await getBlogSection(locale);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to load blog section:", error);
    return NextResponse.json(
      { error: "Failed to load blog section" },
      { status: 500 },
    );
  }
}
