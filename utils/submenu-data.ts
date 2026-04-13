import { getAllPracticeAreas } from "@/sanity/lib/api";
import type { PracticeAreaMenuItem } from "@/types/types";

export async function getPracticeAreaSubMenuData(): Promise<PracticeAreaMenuItem[]> {
    const practiceAreas = await getAllPracticeAreas();
    const seen = new Set<string>();
  
    const items = practiceAreas

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
  
    // Add main page
    if (!seen.has("practice-areas")) {
      items.push({
        title: "All Practice Areas",
        slug: "practice-areas",
      });
    }
  
    return items;
  }