import ImageUrlBuilder from "@sanity/image-url";
import sanityClient from "./client";

const builder = ImageUrlBuilder(sanityClient);

export function urlFor(source) {
  return builder.image(source);
}

// Sanity encodes the original dimensions in the asset ref:
// image-<id>-<width>x<height>-<format>
export function getImageDimensions(source) {
  const ref = source?.asset?._ref ?? source?.asset?._id;
  const match = /-(\d+)x(\d+)-[a-z]+$/.exec(ref ?? "");
  if (!match) return null;
  return { width: Number(match[1]), height: Number(match[2]) };
}
