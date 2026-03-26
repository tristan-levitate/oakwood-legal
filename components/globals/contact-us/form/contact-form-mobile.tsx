"use client";

import React, { useState } from "react";
import { MdCheck } from "react-icons/md";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInput from "../custom-input";
import CustomTextarea from "../custom-textarea";
import CustomSelect from "../custom-select";
import CustomCheckbox from "../custom-checkbox";

// Form Schema with Zod
const formSchema = z.object({
  fullName: z.string().min(1, "Full name is required."),
  email: z
    .string()
    .min(1, "Email is required.")
    .email("Please enter a valid email address."),
  phone: z.string().min(1, "Phone number is required."),
  legalArea: z.string().min(1, "Legal area is required."),
  helpMessage: z.string().min(1, "Message is required."),
  newsletter: z.boolean().optional(),
});

export type IContactFormMobile = z.infer<typeof formSchema>;

export default function ContactFormMobile() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const methods = useForm<IContactFormMobile>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      legalArea: "",
      helpMessage: "",
      newsletter: false,
    },
  });

  const { handleSubmit, reset } = methods;

  const legalAreaOptions = [
    { value: '', label: 'Legal Area Of Your Case' },
    { value: 'personal-injury', label: 'Personal Injury' },
    { value: 'car-accident', label: 'Car Accident' },
    { value: 'medical-malpractice', label: 'Medical Malpractice' },
    { value: 'wrongful-death', label: 'Wrongful Death' },
    { value: 'other', label: 'Other' }
  ];

  const onSubmit = async (data: IContactFormMobile) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setFormSubmitted(true);
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success screen
  if (formSubmitted) {
    return (
      <div className="flex justify-center items-center min-h-[300px] w-full">
        <div className="text-center px-4">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <MdCheck className="text-3xl text-green-500" />
          </div>
          <h2 className="mb-3 text-center text-xl font-semibold text-white uppercase">
            Form Submitted Successfully!
          </h2>
          <p className="mb-4 text-center text-gray-400 text-sm">
            Thank you for contacting us. We will get back to you shortly.
          </p>
          <button
            onClick={() => setFormSubmitted(false)}
            className="bg-[#C02B27] cursor-pointer text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity duration-200 text-sm"
          >
            Submit Another Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-full rounded-xl bg-gradient-to-br from-[rgba(142,132,132,0.1)] to-[rgba(20,12,12,0.1)] relative">
      {/* Overlay for additional transparency */}
      <div className="absolute inset-0 bg-[rgba(255,255,255,0.05)] rounded-xl"></div>
      <div className="relative z-10">
        {/* Form content */}
        <div className="p-4 sm:p-6 md:p-8">
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
              {/* Form Fields Container */}
              <div className="flex w-full flex-col items-start gap-4 sm:gap-6 mb-4 sm:mb-6 pb-4 pt-4 border-b border-[rgba(255,255,255,0.3)]">
                {/* Full Name */}
                <div className="w-full">
                  <CustomInput
                    name="fullName"
                    label="Full Name"
                    placeholder="Full Name"
                    type="text"
                  />
                </div>

                {/* Email */}
                <div className="w-full">
                  <CustomInput
                    name="email"
                    label="Email"
                    placeholder="Email"
                    type="email"
                  />
                </div>

                {/* Phone Number */}
                <div className="w-full">
                  <CustomInput
                    name="phone"
                    label="Phone Number"
                    placeholder="Phone Number"
                    type="tel"
                  />
                </div>

                {/* Legal Area Dropdown */}
                <div className="w-full">
                  <CustomSelect
                    name="legalArea"
                    label=""
                    placeholder="Legal Area Of Your Case"
                    options={legalAreaOptions}
                  />
                </div>

                {/* How We Can Help - Textarea */}
                <div className="w-full">
                  <CustomTextarea
                    name="helpMessage"
                    label="How We Can Help?"
                    placeholder="How We Can Help?"
                    rows={3}
                  />
                </div>

                {/* Newsletter Checkbox */}
                <div className="w-full">
                  <CustomCheckbox
                    name="newsletter"
                    label="Subscribe to our newsletter"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="w-full">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C02B27] cursor-pointer text-white font-normal font-helvetica text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 rounded-md hover:opacity-90 transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ borderRadius: '6px' }}
                >
                  {isSubmitting ? "Sending..." : "Submit Message"}
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
