import { SourceSchema } from "@/types/types";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../sanity/lib/client";

const builder = imageUrlBuilder(client);

export function urlFor(source: SourceSchema) {
  return builder.image(source);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}
