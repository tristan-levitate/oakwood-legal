"use client";

import React, { useState } from "react";
import { MdCheck } from "react-icons/md";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import NewsletterInput from "../newsletter-input";

// Newsletter Form Schema with Zod
const newsletterSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z
    .string()
    .min(1, "Email is required.")
    .email("Please enter a valid email address."),
});

export type INewsletterForm = z.infer<typeof newsletterSchema>;

export default function NewsletterForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const methods = useForm<INewsletterForm>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = async (data: INewsletterForm) => {
    setIsSubmitting(true);
    try {
      // TODO: Implement newsletter subscription logic
      console.log("Newsletter subscription:", data);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setFormSubmitted(true);
      reset();
    } catch (error) {
      console.error("Newsletter subscription error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full lg:w-[482px]">
      <div className="bg-gradient-to-br from-[#ffffff1a] to-[rgba(255,255,255,0.05)] p-[1px] rounded-md h-[230px]">
        <div className="bg-[#140C0C] rounded-md py-4 px-4 lg:py-5 lg:px-6 h-full">
          {/* Newsletter Title */}
          <h3 className="text-white text-base lg:text-lg font-normal font-helvetica mb-3 text-left">
            SUBSCRIBE TO OUR NEWSLETTER
          </h3>

          {/* Newsletter Form */}
          {formSubmitted ? (
            <div className="text-center py-4">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <MdCheck className="text-2xl text-green-500" />
              </div>
              <h4 className="mb-2 text-white font-normal font-helvetica">
                Subscribed Successfully!
              </h4>
              <p className="text-[#C7C7C7] text-sm mb-3">
                Thank you for subscribing to our newsletter.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="text-[#FF503C] text-sm hover:underline"
              >
                Subscribe Another Email
              </button>
            </div>
          ) : (
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name Input */}
                <NewsletterInput
                  name="name"
                  placeholder="Name"
                  type="text"
                  className="mb-7"
                />

                {/* Email Input */}
                <NewsletterInput
                  name="email"
                  placeholder="Email"
                  type="email"
                />

                {/* Subscribe Button */}
                <div className="pt-1 flex justify-start">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-transparent cursor-pointer text-white font-normal font-helvetica text-sm py-2 px-4 lg:px-6 rounded-[6px] border border-[#FF503C] hover:bg-[rgba(255,80,60,0.1)] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "SUBSCRIBING..." : "SUBSCRIBE"}
                  </button>
                </div>
              </form>
            </FormProvider>
          )}
        </div>
      </div>
    </div>
  );
}
