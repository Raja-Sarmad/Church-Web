import { NextResponse } from "next/server";

import { getServicePageCta } from "@/lib/sanity-site-data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") || "en";

  try {
    const data = await getServicePageCta(locale);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to load beneficiaries page:", error);
    return NextResponse.json(
      { error: "Failed to load beneficiaries page" },
      { status: 500 },
    );
  }
}
