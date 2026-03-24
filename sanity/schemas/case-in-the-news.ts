import { MdImage, MdNewspaper, MdVideoFile } from "react-icons/md";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "case-in-the-news",
  title: "Case in the News",
  type: "document",
  icon: MdNewspaper,
  fields: [
    defineField({
      name: "titleForSEO",
      title: "Title for SEO",
      type: "string",
      validation: (Rule) => Rule.required().error("Title for SEO is required"),
    }),
    defineField({
      name: "descriptionForSEO",
      title: "Description for SEO",
      type: "text",
      validation: (Rule) => Rule.required().error("Description is required"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required().error("Slug is required"),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().error("Title is required"),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required().error("Description is required"),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      validation: (Rule) => Rule.required().error("Date is required"),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule) => Rule.required().error("Category is required"),
      options: {
        list: [
          {
            title: "Bar Liability/Dram Shop",
            value: "bar-liability-dram-shop",
          },
          { title: "Car Accidents", value: "car-accidents" },
          { title: "Civil Rights", value: "civil-rights" },
          { title: "General", value: "general" },
          { title: "Nursing Home Abuse", value: "nursing-home-abuse" },
          { title: "Pedestrian Accidents", value: "pedestrian-accidents" },
          { title: "Personal Injury", value: "personal-injury" },
          { title: "Safety", value: "safety" },
          { title: "Truck Accidents", value: "truck-accidents" },
          { title: "Vehicle Accidents", value: "vehicle-accidents" },
          { title: "Workplace Accidents", value: "workplace-accidents" },
          { title: "Wrongful Death", value: "wrongful-death" },
        ],
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
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
