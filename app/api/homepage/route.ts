import { NextResponse } from "next/server";

import { getHomepageData } from "@/lib/sanity-site-data";

const allowedSections = new Set([
  "heroSection",
  "aboutSection",
  "missionVisionSection",
  "volunteerCtaSection",
  "donationPreviewSection",
  "areasOfWorkSection",
  "blogSection",
  "contactSection",
  "gallerySliderSection",
  "coreValuesSection",
]);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") || "en";
  const section = searchParams.get("section");

  try {
    const data = await getHomepageData(locale);

    if (section) {
      if (!allowedSections.has(section)) {
        return NextResponse.json(
          { error: "Unknown homepage section" },
          { status: 400 },
        );
      }

      return NextResponse.json(data[section as keyof typeof data]);
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to load homepage content:", error);
    return NextResponse.json(
      { error: "Failed to load homepage content" },
      { status: 500 },
    );
  }
}
