import { MdWallet } from "react-icons/md";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "results",
  title: "Results",
  type: "document",
  icon: MdWallet,
  fields: [
    defineField({
      name: "verdict",
      title: "Verdict",
      description: "Ex: $1 MILLION CAR ACCIDENT",
      type: "string",
      validation: (Rule) => Rule.required().error("Verdict is required"),
    }),
    defineField({
      name: "resultDetails",
      title: "Result Details",
      description:
        "Ex: The client was charged with conspiracy to possess with intent to...",
      type: "text",
    }),
  ],
});
