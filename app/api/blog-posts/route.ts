import { NextResponse } from "next/server";

import { getBlogPosts } from "@/lib/sanity-site-data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") || "en";

  try {
    const data = await getBlogPosts(locale);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to load blog posts:", error);
    return NextResponse.json(
      { error: "Failed to load blog posts" },
      { status: 500 },
    );
  }
}
