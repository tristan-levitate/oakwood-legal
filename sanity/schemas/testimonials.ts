import { MdPeople } from "react-icons/md";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  icon: MdPeople,
  fields: [
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      initialValue: 5,
      validation: (Rule) =>
        Rule.min(1).max(5).error("Rating must be between 1 and 5"),
    }),
    defineField({
      name: "testimony",
      title: "Testimony",
      type: "text",
      description:
        "I highly recommend Wilk Law Personal Injury & Car Accident Lawyers! He is really responsive and professional. He is just one of those people you feel safe around, like everything is going to be alright.",
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
    }),
  ],
});
