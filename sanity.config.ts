import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title("Content")
          .items([
            orderableDocumentListDeskItem({
              type: "practiceAreas",
              title: "Practice Areas",
              S,
              context,
            }),
            ...S.documentTypeListItems().filter(
              (item) => item.getId() !== "practiceAreas",
            ),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  title: "Studio | Oakwood Legal Group",
});
