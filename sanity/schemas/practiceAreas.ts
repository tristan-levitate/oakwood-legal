import { MdImage, MdLocationOn, MdVideoFile } from "react-icons/md";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "practiceAreas",
  title: "Practice Areas",
  type: "document",
  icon: MdLocationOn,
  fields: [
    defineField({
      name: "titleForSEO",
      title: "Title for SEO",
      description:
        "This will be used for SEO purposes. It should be a short heading.",
      type: "string",
      validation: (Rule) => Rule.required().error("Heading is required"),
    }),
    defineField({
      name: "descriptionForSEO",
      title: "Description for SEO",
      description:
        "This will be used for SEO purposes. It should be a short description.",
      type: "text",
      validation: (Rule) => Rule.required().error("Description is required"),
    }),
    defineField({
      name: "title",
      title: "Title",
      description: "Ex: Car Accident",
      type: "string",
      validation: (Rule) => Rule.required().error("Title is required"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description: "Ex: family-law",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required().error("Slug is required"),
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "Ex: Bucks County Car Accident Attorney",
      type: "text",
      validation: (Rule) => Rule.required().error("Description is required"),
    }),
    defineField({
      name: "date",
      title: "Date of publication",
      description: "Ex: 2025-03-01",
      type: "date",
    }),
    defineField({
      name: "otherAreas",
      title: "Other Areas",
      description:
        "This will help relate otherAreas to practiceAreas, such as Adoption and Divorce are related to Family Law.",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "other_areas" }],
        },
      ],
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "This will be used as a thumbnail.",
      options: {
        hotspot: true,
      },
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
