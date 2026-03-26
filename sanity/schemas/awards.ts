import { MdWallet } from "react-icons/md";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "awards",
  title: "Awards",
  type: "document",
  icon: MdWallet,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Ex: The Los Angeles Times",
      type: "string",
      validation: (Rule) => Rule.required().error("Title is required"),
    }),
    defineField({
      name: "awardDetails",
      title: "Award Details",
      description: "Ex: Publications include in The Los Angeles Times.",
      type: "text",
    }),
  ],
});
