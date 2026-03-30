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
import { submitForm } from "@/app/actions/forms";
import { useGetClientInfo } from "@/utils/useGetClientInfo";
import { Tracking } from "@/components/Tracking";

// Form Schema with Zod
const formSchema = z.object({
  fullName: z.string().min(1, "Full name is required."),
  email: z
    .string()
    .min(1, "Email is required.")
    .email("Please enter a valid email address."),
  phone: z.string().min(1, "Phone number is required."),
  legalArea: z.string().min(1, "Legal area is required."),
  message: z.string().min(1, "Message is required."),
  newsletter: z.boolean().optional(),
});

export type IContactForm = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const clientInfo = useGetClientInfo();

  const methods = useForm<IContactForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      legalArea: "",
      message: "",
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

  const onSubmit = async (data: IContactForm) => {
    setIsSubmitting(true);
    try {
      const { token } = await Tracking.getRecaptchaToken();
      
      const result = await submitForm(
        data,
        "Oakwood Legal Group - Form Submission",
        token,
        clientInfo
      );

      if (result.sendgrid?.status === "sent") {
        console.log("SendGrid email sent successfully");
      } else if (result.sendgrid?.status === "failed") {
        console.error(
          "SendGrid email failed:",
          result.sendgrid?.error || "Unknown error"
        );
      }

      if (result.success) {
        setFormSubmitted(true);
        reset();
      } else {
        console.error("Form submission failed:", result.error);
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success screen
  if (formSubmitted) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <MdCheck className="text-4xl text-green-500" />
          </div>
          <h2 className="mb-3 text-center text-2xl font-semibold text-white uppercase">
            Form Submitted Successfully!
          </h2>
          <p className="mb-6 text-center text-gray-400">
            Thank you for contacting us. We will get back to you shortly.
          </p>
          <button
            onClick={() => setFormSubmitted(false)}
            className="bg-[#C02B27] cursor-pointer text-white px-6 py-2 rounded-md hover:opacity-90 transition-opacity duration-200"
          >
            Submit Another Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-auto min-[1450px]:h-[750px] rounded-xl mb-0 min-[750px]:max-[1449px]:mb-[-100px] min-[1450px]:mb-[-150px] bg-gradient-to-br from-[rgba(142,132,132,0.1)] to-[rgba(20,12,12,0.1)] relative">
      {/* Overlay for additional transparency */}
      <div className="absolute inset-0 bg-[rgba(255,255,255,0.05)] rounded-xl"></div>
      <div className="relative z-10 h-full">
        {/* Form content */}
        <div className="p-4 min-[600px]:p-5 min-[768px]:p-6 min-[1024px]:p-7 min-[1450px]:p-8">
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 min-[600px]:space-y-5 min-[768px]:space-y-6 min-[1024px]:space-y-7 min-[1450px]:space-y-8">
              {/* Form Fields Container */}
              <div className="flex w-full flex-col items-start gap-4 min-[600px]:gap-5 min-[768px]:gap-6 min-[1024px]:gap-7 min-[1450px]:gap-9 mb-4 min-[600px]:mb-5 min-[768px]:mb-6 min-[1024px]:mb-7 min-[1450px]:mb-9 pb-4 border-b border-[rgba(255,255,255,0.3)]">
                {/* Full Name */}
                <CustomInput
                  name="fullName"
                  label="Full Name"
                  placeholder="Full Name"
                  type="text"
                />

                {/* Email */}
                <CustomInput
                  name="email"
                  label="Email"
                  placeholder="Email"
                  type="email"
                />

                {/* Phone Number */}
                <CustomInput
                  name="phone"
                  label="Phone Number"
                  placeholder="Phone Number"
                  type="tel"
                />

                {/* Legal Area Dropdown */}
                <CustomSelect
                  name="legalArea"
                  label=""
                  placeholder="Legal Area Of Your Case"
                  options={legalAreaOptions}
                />

                {/* How We Can Help - Textarea */}
                <CustomTextarea
                  name="message"
                  label="How We Can Help?"
                  placeholder="How We Can Help?"
                  rows={3}
                />

                {/* Newsletter Checkbox */}
                <CustomCheckbox
                  name="newsletter"
                  label="Subscribe to our newsletter"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C02B27] cursor-pointer text-white font-normal font-helvetica text-[16px] min-[768px]:text-[17px] min-[1024px]:text-[18px] min-[1450px]:text-lg px-4 min-[600px]:px-5 min-[768px]:px-6 min-[1024px]:px-[16px] min-[1450px]:px-[18px] py-3 min-[600px]:py-[14px] min-[768px]:py-[15px] min-[1024px]:py-[15px] min-[1450px]:py-[16px] rounded-md hover:opacity-90 transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
