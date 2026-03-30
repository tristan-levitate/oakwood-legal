"use client";

import React, { useState } from "react";
import { MdCheck } from "react-icons/md";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SqueezeInput from "./squeeze-input";
import SqueezeTextarea from "./squeeze-textarea";
import SqueezeSelect from "./squeeze-select";
import SqueezeFormHeader from "./squeeze-form-header";
import HorizontalTestimonial from "./horizontal-testimonial";
import SqueezeCheckbox from "./squeeze-checkbox";
import { submitForm } from "@/app/actions/forms";
import { useGetClientInfo } from "@/utils/useGetClientInfo";
import { Tracking } from "@/components/Tracking";
import { SqueezeFormVideos } from "@/utils/squeeze-form-videos";

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

export type ISqueezeForm = z.infer<typeof formSchema>;

interface SqueezeFormProps {
    videos?: SqueezeFormVideos;
}

export default function SqueezeForm({ videos }: SqueezeFormProps) {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const clientInfo = useGetClientInfo();

    const methods = useForm<ISqueezeForm>({
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

    // Default videos if not provided
    const defaultVideos: SqueezeFormVideos = {
        topVideo: "https://cg-oakwood-legal-group.s3.us-east-1.amazonaws.com/Premises-Liability-1.mp4",
        bottomVideo: "https://cg-oakwood-legal-group.s3.us-east-1.amazonaws.com/premises-lability-2.mp4",
    };
    const formVideos = videos || defaultVideos;

    const legalAreaOptions = [
        { value: '', label: 'Legal Area Of Your Case' },
        { value: 'personal-injury', label: 'Personal Injury' },
        { value: 'car-accident', label: 'Car Accident' },
        { value: 'medical-malpractice', label: 'Medical Malpractice' },
        { value: 'wrongful-death', label: 'Wrongful Death' },
        { value: 'other', label: 'Other' }
    ];

    const onSubmit = async (data: ISqueezeForm) => {
        setIsSubmitting(true);
        try {
            const { token } = await Tracking.getRecaptchaToken();
            
            const result = await submitForm(
                data,
                "Oakwood Legal Group - Squeeze Page Form",
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

            Tracking.submitConversionTracking(
                data,
                "Oakwood Legal Group - Squeeze Page Form",
                clientInfo.eventId
            );

            if (result.success) {
                setFormSubmitted(true);
                reset();
            } else {
                console.error("Form submission failed:", result.error);
            }
        } catch (error) {
            console.error("Squeeze form submission error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Success screen
    if (formSubmitted) {
        return (
            <div className="w-full max-w-[500px] rounded-xl bg-gradient-to-br from-[rgba(142,132,132,0.1)] to-[rgba(20,12,12,1)] backdrop-blur-md relative">
                {/* Overlay for additional transparency */}
                <div className="absolute inset-0 bg-[rgba(255,255,255,0.05)] rounded-xl"></div>
                <div className="relative z-10 flex flex-col items-center">
                    {/* New Form Header */}
                    <SqueezeFormHeader />

                    {/* Success Container */}
                    <div className="w-full px-8 pb-6">
                        <div className="p-8 text-center">
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                                    <MdCheck className="text-white text-2xl" />
                                </div>
                            </div>
                            <h3 className="text-white text-xl font-helvetica mb-4">Thank You!</h3>
                            <p className="text-[#C7C7C7] font-neue-montreal">
                                Your message has been sent successfully. We'll get back to you soon.
                            </p>
                        </div>
                        
                        {/* Horizontal Testimonials */}
                        <div className="mt-8 space-y-4">
                            <HorizontalTestimonial
                                content="Oakwood Legal Group fought tirelessly for my family after our accident. Their expertise and dedication resulted in a settlement that changed our lives."
                                name="Sarah Johnson"
                                rating={5}
                            />
                            <HorizontalTestimonial
                                content="Professional, compassionate, and results-driven. They handled everything while I focused on recovery. Couldn't be more grateful."
                                name="Michael Chen"
                                rating={5}
                            />
                            <HorizontalTestimonial
                                content="After my workplace injury, they secured compensation I never thought possible. Their team truly cares about their clients."
                                name="Maria Rodriguez"
                                rating={5}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full mt-[-650px] max-[1080px]:mt-0 rounded-md bg-gradient-to-br from-[rgba(142,132,132,0.1)] to-[rgba(20,12,12,0.1)] backdrop-blur-2xl relative">
            {/* Overlay for additional transparency */}
            <div className="absolute inset-0 bg-[rgba(255,255,255,0.05)] rounded-md"></div>
            <div className="relative z-10 flex flex-col items-center">
                {/* Video */}
                <div className=" h-full object-cover rounded-[4px] w-[95%] pt-4">
                    <video src={formVideos.topVideo} autoPlay muted loop controls playsInline className="w-full h-full object-cover rounded-[4px]" poster="https://cg-oakwood-legal-group.s3.us-east-1.amazonaws.com/Oakwood-legal-group-poster.png"></video>
                </div>
                {/* New Form Header */}
                <SqueezeFormHeader />

                {/* Form content */}
                <div className="w-full px-8 pb-6">
                    <FormProvider {...methods}>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Form Fields Container */}
                            <div className="flex w-full flex-col items-start gap-6">
                                {/* Full Name */}
                                <SqueezeInput
                                    name="fullName"
                                    label="Full Name"
                                    placeholder="Full Name"
                                    type="text"
                                />

                                {/* Email */}
                                <SqueezeInput
                                    name="email"
                                    label="Email"
                                    placeholder="Email"
                                    type="email"
                                />

                                {/* Phone Number */}
                                <SqueezeInput
                                    name="phone"
                                    label="Phone Number"
                                    placeholder="Phone Number"
                                    type="tel"
                                />

                                {/* Legal Area Dropdown */}
                                <SqueezeSelect
                                    name="legalArea"
                                    label=""
                                    placeholder="Legal Area Of Your Case"
                                    options={legalAreaOptions}
                                />

                                {/* How We Can Help - Textarea */}
                                <SqueezeTextarea
                                    name="message"
                                    label="How We Can Help?"
                                    placeholder="Tell us about your case..."
                                    rows={3}
                                />

                                 {/* Newsletter Checkbox */}
                                 <SqueezeCheckbox
                                     name="newsletter"
                                     label="Subscribe to our newsletter for legal updates"
                                 />
                            </div>

                             {/* Submit Button */}
                             <div className="pt-4">
                                 <button
                                     type="submit"
                                     disabled={isSubmitting}
                                     className="w-full cursor-pointer bg-gradient-to-r from-[#C02B27] to-[#C02B27] text-white py-3 px-6 rounded-md font-helvetica text-sm tracking-wide hover:opacity-90 transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                 >
                                     {isSubmitting ? "Sending..." : "Contact Us Today"}
                                 </button>
                             </div>
                         </form>
                     </FormProvider>
                     
                     {/* Horizontal Testimonials */}
                     <div className="mt-8 space-y-4">
                         <HorizontalTestimonial
                             content="Oakwood Legal Group fought tirelessly for my family after our accident. Their expertise and dedication resulted in a settlement that changed our lives."
                             name="Sarah Johnson"
                             rating={5}
                         />
                         <HorizontalTestimonial
                             content="Professional, compassionate, and results-driven. They handled everything while I focused on recovery. Couldn't be more grateful."
                             name="Michael Chen"
                             rating={5}
                         />
                         <HorizontalTestimonial
                             content="After my workplace injury, they secured compensation I never thought possible. Their team truly cares about their clients."
                             name="Maria Rodriguez"
                             rating={5}
                         />
                     </div>
                     <div className="w-full h-full object-cover rounded-[4px] pt-4">
                        <video src={formVideos.bottomVideo} autoPlay muted loop controls playsInline className="w-full h-full object-cover rounded-[4px]"></video>
                    </div>
                 </div>
            </div>
        </div>
    );
}
