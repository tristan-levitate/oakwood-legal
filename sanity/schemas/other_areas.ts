import { MdImage, MdVideoFile, MdWork } from "react-icons/md";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "other_areas",
  title: "Other Areas",
  type: "document",
  icon: MdWork,
  fields: [
    defineField({
      name: "seo_title",
      title: "SEO Title",
      description: "Ex: Civil Rights Cases We Handle",
      type: "string",
      validation: (Rule) => Rule.required().error("SEO title is required"),
    }),
    defineField({
      name: "seo_description",
      title: "SEO Description",
      description: "Ex: At the forefront of civil rights litigation in...",
      type: "text",
      validation: (Rule) =>
        Rule.required().error("SEO description is required"),
    }),

    defineField({
      name: "title",
      title: "Title",
      description: "Ex: West Chester Car Accident Lawyer",
      type: "string",
      validation: (Rule) => Rule.required().error("Title is required"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description: "Ex: car-accident-lawyers",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required().error("Slug is required"),
    }),
    defineField({
      name: "titleNavigation",
      title: "Navigation Label",
      description: "Ex: Truck Accidents",
      type: "string",
      validation: (Rule) => Rule.required().error("Title is required"),
    }),
    defineField({
      name: "description",
      title: "Navigation Description",
      description: "Ex: At the forefront of civil rights litigation in...",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "This will be used as a thumbnail.",
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
