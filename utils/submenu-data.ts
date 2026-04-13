import { getAllPracticeAreas } from "@/sanity/lib/api";
import type { PracticeAreaMenuItem } from "@/types/types";

export async function getPracticeAreaSubMenuData(): Promise<PracticeAreaMenuItem[]> {

  const practiceAreas = await getAllPracticeAreas();

  const seen = new Set<string>();

  return practiceAreas
  
    .filter((item) => Boolean(item?.title && item?.slug))
    .map((item) => ({
      title: item.title.trim(),
      slug: item.slug.trim(),
    }))

    .filter((item) => {
      if (seen.has(item.slug)) return false;
      seen.add(item.slug);
      return true;
    });
}