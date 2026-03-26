import React from 'react';
import type { Metadata } from 'next';
import DualTitle from '@/components/globals/dual-title/dual-title';
import ContentCard from '@/components/globals/content-card/content-card';
import ContactUs from '@/components/globals/contact-us/contact-us';
import { getLatestArticles } from '@/sanity/lib/api';
import type { ArticleProps } from '@/types/types';

export const metadata: Metadata = {
    title: "Articles - Oakwood Legal Group",
    description: "LATEST ARTICLES LATEST NEWS & ARTICLES Oakwood Legal Group transforms your experience from one of personal injury to personal attention. Call Our Team Today Our Case Results learn about oakwood legal…",
};

export default async function Articles() {
    const articles = await getLatestArticles();

    return (
        <main className="relative z-20">
            <DualTitle
                titleWhite="NEWS &"
                titleRed="ARTICLES"
                message="Explore insights, updates, and stories that highlight our cases, our community, and the fight for justice."
                page="articles"
            />

            <section className="mt-20 max-[500px]:mt-10" aria-labelledby="articles-list">
                <ContentCard items={articles} page="articles" />
            </section>

            <ContactUs />
        </main>
    );
}
