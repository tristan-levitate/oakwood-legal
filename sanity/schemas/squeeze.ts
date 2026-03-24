import { MdImage, MdPageview, MdVideoFile } from "react-icons/md";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "squeeze",
  title: "Squeeze",
  type: "document",
  icon: MdPageview,
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
      description: "Ex: Your Voice Deserves to Be Heard",
      type: "string",
      validation: (Rule) => Rule.required().error("Title is required"),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      description:
        "Ex: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description: "Ex: your-voice-deserves-to-be-heard",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required().error("Slug is required"),
    }),
    defineField({
      name: "description",
      title: "Description",
      description:
        "This text will be used as the meta description for the squeeze page.",
      type: "text",
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
    defineField({
      name: "video",
      title: "Video",
      description: "Upload a video file or enter a video URL",
      type: "object",
      fields: [
        {
          name: "videoType",
          title: "Video Type",
          type: "string",
          options: {
            list: [
              { title: "Upload Video File", value: "file" },
              { title: "Video URL", value: "url" },
            ],
          },
          validation: (Rule) =>
            Rule.required().error("Please select a video type"),
        },
        {
          name: "videoFile",
          title: "Video File",
          type: "file",
          options: {
            accept: "video/*",
          },
          hidden: ({ parent }) => parent?.videoType !== "file",
        },
        {
          name: "videoUrl",
          title: "Video URL",
          type: "url",
          description:
            "Enter the URL of the video (e.g., https://example.com/video.mp4)",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https"],
            }).error(
              "Please enter a valid URL starting with http:// or https://"
            ),
          hidden: ({ parent }) => parent?.videoType !== "url",
        },
      ],
    }),
  ],
});
