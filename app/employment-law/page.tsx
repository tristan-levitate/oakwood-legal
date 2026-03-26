import React from 'react'
import type { Metadata } from 'next';
import DualHero from '@/components/globals/dual-hero/dual-hero'
import BlurEffect from '@/components/globals/blur-effect/blur-effect'
import WhyChooseUsList from '@/components/screens/employment-law/why-choose-us-list';
import ContactUs from '@/components/globals/contact-us/contact-us'

export const metadata: Metadata = {
    title: "Employment Law - Oakwood Legal Group",
    description: "Protecting employees' rights against unfair treatment and workplace violations in California communities.",
};

export default async function EmploymentLawPage() {
    return (
        <main className="relative z-20">
            <DualHero
                titleWhite="EMPLOYMENT LAW"
                message="Protecting employees' rights against unfair treatment and workplace violations in California communities."
                backgroundImage="/images/bg-employmnet-law-hero.webp"
                page="employment-law"
            />

            <BlurEffect variant="default" />

            <section className="relative z-30 mt-20 mx-auto w-full max-w-[700px]">

                <WhyChooseUsList />

            </section>

            <ContactUs />

        </main>
    )
}