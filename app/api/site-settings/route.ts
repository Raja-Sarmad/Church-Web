import { NextResponse } from "next/server";

import { getSiteSettings } from "@/lib/sanity-site-data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") || "en";

  try {
    const data = await getSiteSettings(locale);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to load site settings:", error);
    return NextResponse.json(
      { error: "Failed to load site settings" },
      { status: 500 },
    );
  }
}
