import React from "react";
import { ImageSchema } from "@/types/types";
import { PortableText, PortableTextProps } from "@portabletext/react";
import { TypedObject } from "sanity";
import Image from "next/image";
import { urlFor } from "@/utils/functions";

interface CustomPortableTextProps {
  content: TypedObject | TypedObject[];
}

const components: Partial<PortableTextProps["components"]> = {
  types: {
    image: ({ value }: { value: ImageSchema }) => {
      if (!value || !value.asset) {
        console.error("value or value.asset is missing", value);
        return null;
      }

      return (
        <div className="my-8">
          <Image
            src={urlFor(value.asset).url()}
            alt={value.caption || "Image without description"}
            width={800}
            height={600}
            className="w-full h-auto rounded-lg"
          />
          {value.caption && (
            <p className="text-sm text-gray-400 mt-2 text-center italic">
              {value.caption}
            </p>
          )}
        </div>
      );
    },

    video: ({
      value,
    }: {
      value: {
        _type: string;
        _key: string;
        title?: string;
        url: string;
      };
    }) => {
      if (!value || !value.url) {
        return null;
      }

      return (
        <div className="my-8">
          <div className="aspect-video">
            <iframe
              src={value.url}
              title={value.title || "Video"}
              className="w-full h-full rounded-lg"
              allowFullScreen={true}
            />
          </div>
        </div>
      );
    },
  },
  block: {
    normal: ({ children }) => (
      <p className="mb-6 text-[#C7C7C7] text-[16px] leading-[160%] text-no-orphans">
        {children}
      </p>
    ),
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-white mb-6 mt-8 text-perfect-wrap">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-white mb-4 mt-6 text-perfect-wrap">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold text-white mb-4 mt-6 text-perfect-wrap">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-bold text-white mb-3 mt-4 text-perfect-wrap">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#C02B27] pl-6 my-6 italic text-[#C7C7C7]">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside mb-6 text-[#C7C7C7] space-y-2 text-no-orphans">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside mb-6 text-[#C7C7C7] space-y-2 text-no-orphans">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="text-[#C7C7C7] text-[16px] leading-[160%] text-no-orphans">
        {children}
      </li>
    ),
    number: ({ children }) => (
      <li className="text-[#C7C7C7] text-[16px] leading-[160%] text-no-orphans">
        {children}
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-white">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
    link: ({ children, value }) => (
      <a
        href={value.href}
        target={value.blank ? "_blank" : "_self"}
        rel={value.blank ? "noopener noreferrer" : undefined}
        className="text-[#C02B27] hover:text-white underline transition-colors"
      >
        {children}
      </a>
    ),
  },
};

export default function PortableTextComponent({
  content,
}: CustomPortableTextProps) {
  if (!content) {
    return null;
  }

  return (
    <div className="portable-text-wrapper max-w-none">
      <PortableText value={content} components={components} />
    </div>
  );
}
