import { type SchemaTypeDefinition } from "sanity";
import testimonials from "./schemas/testimonials";
import results from "./schemas/results";
import squeeze from "./schemas/squeeze";
import members from "./schemas/members";
import awards from "./schemas/awards";
import practiceAreas from "./schemas/practiceAreas";
import articles from "./schemas/articles";
import other_areas from "./schemas/other_areas";
import caseInTheNews from "./schemas/case-in-the-news";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    testimonials,
    results,
    squeeze,
    members,
    practiceAreas,
    articles,
    other_areas,
    awards,
    caseInTheNews,
  ],
};
