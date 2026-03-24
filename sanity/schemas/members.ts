import { MdImage, MdPeople, MdVideoFile } from "react-icons/md";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "members",
  title: "Members",
  type: "document",
  icon: MdPeople,
  fields: [
    defineField({
      name: "seo_title",
      title: "SEO Title",
      type: "string",
    }),
    defineField({
      name: "seo_description",
      title: "SEO Description",
      type: "text",
    }),

    defineField({
      name: "name",
      title: "Name",
      description: "Ex: Jeremy Harter",
      type: "string",
      validation: (Rule) => Rule.required().error("Name is required"),
    }),
    defineField({
      name: "role",
      title: "Role",
      description: "Ex: Founding partner",
      type: "string",
      validation: (Rule) => Rule.required().error("Role is required"),
    }),
    defineField({
      name: "image",
      title: "Image",
      description:
        "This image will be used in the member card and as banner on the member page.",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error("Image is required"),
    }),
    defineField({
      name: "content",
      title: "Content",
      description:
        "Page content, containing links, lists, headings and paragraphs.",
      type: "array",
      of: [
        defineArrayMember({ type: "block" }),
        defineArrayMember({
          type: "image",
          icon: MdImage,
          fields: [
            {
              name: "caption",
              title: "Caption",
              type: "string",
              options: {
                hotspot: true,
              },
            },
            {
              name: "deviceType",
              title: "Display On",
              type: "string",
              options: {
                list: [
                  { title: "Both", value: "both" },
                  { title: "Mobile Only", value: "mobile" },
                  { title: "Desktop Only", value: "desktop" },
                ],
                layout: "radio",
              },
              initialValue: "both",
            },
          ],
        }),
        defineArrayMember({
          type: "object",
          icon: MdVideoFile,
          name: "video",
          title: "Video",
          fields: [
            {
              name: "url",
              title: "Video URL",
              type: "url",
              description: "URL of the YouTube, Vimeo or .mp4 video",
              validation: (Rule) => Rule.required().error("A URL is required"),
            },
          ],
        }),
      ],
    }),
  ],
});
