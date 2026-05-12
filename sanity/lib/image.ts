import imageUrlBuilder from "@sanity/image-url";

import { sanityClient } from "@/sanity/lib/client";

const builder = imageUrlBuilder(sanityClient);

export const urlForImage = (source: unknown) => builder.image(source as never);
