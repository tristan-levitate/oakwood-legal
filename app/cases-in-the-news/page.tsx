import React from 'react'
import type { Metadata } from 'next';
import DualTitle from '@/components/globals/dual-title/dual-title'
import LogosCarousel from '@/components/globals/carousel-slider/carousel-slider'
import ContentCard from '@/components/globals/content-card/content-card'
import ContactUs from '@/components/globals/contact-us/contact-us'
import { CaseInTheNewsProps } from '@/types/types'

export const metadata: Metadata = {
    title: "Cases in the News - Oakwood Legal Group",
    description: "ABOUT OAKWOOD LEGAL CASES IN THE NEWS Oakwood Legal Group transforms your experience from one of personal injury to personal attention. Call Our Team Today Our Case Results Former Salinas…",
};

export default function CasesInTheNews() {
    // const casesInTheNews = await getLatestCasesInTheNews();
    
    // Mock data for testing
    const mockCasesInTheNews: CaseInTheNewsProps[] = [
        {
            imageUrl: "/images/cases-image-mock.png",
            title: "Former Salinas High students sue over counselor who went to prison for sexual abuse",
            description: "Seven former Salinas High School students have sued the Salinas Union High School District, the now-defunct drug and alcohol counselling center Sunrise House and former Sunrise House counsellor Gilbert Olivares…",
            slug: "understanding-your-rights-after-car-accident-california",
            titleForSEO: "Former Salinas High students sue over counselor who went to prison for sexual abuse",
            descriptionForSEO: "Seven former Salinas High School students have sued the Salinas Union High School District, the now-defunct drug and alcohol counselling center Sunrise House and former Sunrise House counsellor Gilbert Olivares…",
            date: "2024-01-15",
            type: "Legal Guide",
            content: []
        },
        {
            imageUrl: "/images/cases-image-mock.png",
            title: "Former Salinas High students sue over counselor who went to prison for sexual abuse",
            description: "Seven former Salinas High School students have sued the Salinas Union High School District, the now-defunct drug and alcohol counselling center Sunrise House and former Sunrise House counsellor Gilbert Olivares…",
            slug: "understanding-your-rights-after-car-accident-california",
            titleForSEO: "Former Salinas High students sue over counselor who went to prison for sexual abuse",
            descriptionForSEO: "Seven former Salinas High School students have sued the Salinas Union High School District, the now-defunct drug and alcohol counselling center Sunrise House and former Sunrise House counsellor Gilbert Olivares…",
            date: "2024-01-15",
            type: "Legal Guide",
            content: []
        },
        {
            imageUrl: "/images/cases-image-mock.png",
            title: "Former Salinas High students sue over counselor who went to prison for sexual abuse",
            description: "Seven former Salinas High School students have sued the Salinas Union High School District, the now-defunct drug and alcohol counselling center Sunrise House and former Sunrise House counsellor Gilbert Olivares…",
            slug: "understanding-your-rights-after-car-accident-california",
            titleForSEO: "Former Salinas High students sue over counselor who went to prison for sexual abuse",
            descriptionForSEO: "Seven former Salinas High School students have sued the Salinas Union High School District, the now-defunct drug and alcohol counselling center Sunrise House and former Sunrise House counsellor Gilbert Olivares…",
            date: "2024-01-15",
            type: "Legal Guide",
            content: []
        },
        {
            imageUrl: "/images/cases-image-mock.png",
            title: "Former Salinas High students sue over counselor who went to prison for sexual abuse",
            description: "Seven former Salinas High School students have sued the Salinas Union High School District, the now-defunct drug and alcohol counselling center Sunrise House and former Sunrise House counsellor Gilbert Olivares…",
            slug: "understanding-your-rights-after-car-accident-california",
            titleForSEO: "Former Salinas High students sue over counselor who went to prison for sexual abuse",
            descriptionForSEO: "Seven former Salinas High School students have sued the Salinas Union High School District, the now-defunct drug and alcohol counselling center Sunrise House and former Sunrise House counsellor Gilbert Olivares…",
            date: "2024-01-15",
            type: "Legal Guide",
            content: []
        },
        {
            imageUrl: "/images/cases-image-mock.png",
            title: "Former Salinas High students sue over counselor who went to prison for sexual abuse",
            description: "Seven former Salinas High School students have sued the Salinas Union High School District, the now-defunct drug and alcohol counselling center Sunrise House and former Sunrise House counsellor Gilbert Olivares…",
            slug: "understanding-your-rights-after-car-accident-california",
            titleForSEO: "Former Salinas High students sue over counselor who went to prison for sexual abuse",
            descriptionForSEO: "Seven former Salinas High School students have sued the Salinas Union High School District, the now-defunct drug and alcohol counselling center Sunrise House and former Sunrise House counsellor Gilbert Olivares…",
            date: "2024-01-15",
            type: "Legal Guide",
            content: []
        },
        {
            imageUrl: "/images/cases-image-mock.png",
            title: "Former Salinas High students sue over counselor who went to prison for sexual abuse",
            description: "Seven former Salinas High School students have sued the Salinas Union High School District, the now-defunct drug and alcohol counselling center Sunrise House and former Sunrise House counsellor Gilbert Olivares…",
            slug: "understanding-your-rights-after-car-accident-california",
            titleForSEO: "Former Salinas High students sue over counselor who went to prison for sexual abuse",
            descriptionForSEO: "Seven former Salinas High School students have sued the Salinas Union High School District, the now-defunct drug and alcohol counselling center Sunrise House and former Sunrise House counsellor Gilbert Olivares…",
            date: "2024-01-15",
            type: "Legal Guide",
            content: []
        },
        {
            imageUrl: "/images/cases-image-mock.png",
            title: "Former Salinas High students sue over counselor who went to prison for sexual abuse",
            description: "Seven former Salinas High School students have sued the Salinas Union High School District, the now-defunct drug and alcohol counselling center Sunrise House and former Sunrise House counsellor Gilbert Olivares…",
            slug: "understanding-your-rights-after-car-accident-california",
            titleForSEO: "Former Salinas High students sue over counselor who went to prison for sexual abuse",
            descriptionForSEO: "Seven former Salinas High School students have sued the Salinas Union High School District, the now-defunct drug and alcohol counselling center Sunrise House and former Sunrise House counsellor Gilbert Olivares…",
            date: "2024-01-15",
            type: "Legal Guide",
            content: []
        },
        {
            imageUrl: "/images/cases-image-mock.png",
            title: "Former Salinas High students sue over counselor who went to prison for sexual abuse",
            description: "Seven former Salinas High School students have sued the Salinas Union High School District, the now-defunct drug and alcohol counselling center Sunrise House and former Sunrise House counsellor Gilbert Olivares…",
            slug: "understanding-your-rights-after-car-accident-california",
            titleForSEO: "Former Salinas High students sue over counselor who went to prison for sexual abuse",
            descriptionForSEO: "Seven former Salinas High School students have sued the Salinas Union High School District, the now-defunct drug and alcohol counselling center Sunrise House and former Sunrise House counsellor Gilbert Olivares…",
            date: "2024-01-15",
            type: "Legal Guide",
            content: []
        },
        {
            imageUrl: "/images/cases-image-mock.png",
            title: "Former Salinas High students sue over counselor who went to prison for sexual abuse",
            description: "Seven former Salinas High School students have sued the Salinas Union High School District, the now-defunct drug and alcohol counselling center Sunrise House and former Sunrise House counsellor Gilbert Olivares…",
            slug: "understanding-your-rights-after-car-accident-california",
            titleForSEO: "Former Salinas High students sue over counselor who went to prison for sexual abuse",
            descriptionForSEO: "Seven former Salinas High School students have sued the Salinas Union High School District, the now-defunct drug and alcohol counselling center Sunrise House and former Sunrise House counsellor Gilbert Olivares…",
            date: "2024-01-15",
            type: "Legal Guide",
            content: []
        },
    ];

    return (
        <main className="relative z-20">
            <DualTitle
                titleWhite="CASES IN"
                titleRed="THE NEWS"
                message="Oakwood Legal Group transforms your experience from one of personal injury to personal attention."
                page="cases-in-the-news"
            />

            <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 mt-12 max-[1125px]:mt-8 mb-4 max-[560px]:px-2 max-[560px]:overflow-visible" aria-labelledby="news-media">
                <h2 id="news-media" className="sr-only">Featured in News Media</h2>
                <LogosCarousel variant="news" />
            </section>

            <section aria-labelledby="cases-news-list">
                <h2 id="cases-news-list" className="sr-only">Cases Featured in News</h2>
                <ContentCard items={mockCasesInTheNews} page="cases-in-the-news" />
            </section>

            <ContactUs />
        </main>
    )
}