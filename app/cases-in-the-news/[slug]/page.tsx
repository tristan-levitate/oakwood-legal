import React from 'react'
import type { Metadata } from 'next';
import DualHero from '@/components/globals/dual-hero/dual-hero'
import ContactUs from '@/components/globals/contact-us/contact-us'

interface CaseNewsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const metadata: Metadata = {
  title: "Case News | Oakwood Legal Group",
  description: "Case news by Oakwood Legal Group",
};

export default async function CaseNewsPage({ params }: CaseNewsPageProps) {
  const { slug } = await params;
  // Mock case news data - in real app this would come from CMS/API based on slug
  const caseNewsData = {
    title: "Major Settlement Victory in Personal\nInjury Case",
    content: "Case news content would go here...",
    publishedAt: new Date().toISOString(),
    author: "Oakwood Legal Team"
  };

  return (
    <article className="relative z-20">
      <DualHero
        titleWhite={caseNewsData.title}
        message="Stay informed about our latest legal victories and significant case developments. Our track record of successful outcomes demonstrates our commitment to fighting for justice and securing the compensation our clients deserve."
        backgroundImage="/images/bg-practice-areas.svg"
      />

      <section className="w-full max-w-[1600px] mx-auto px-8 py-16">
        <h2 className="sr-only">Case News Content</h2>
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-[#C7C7C7] text-[18px] leading-relaxed">
            {caseNewsData.content}
          </p>
          <footer className="mt-8 pt-8 border-t border-[#4E4E4E]">
            <p className="text-[#8E8484] text-sm">
              Published by {caseNewsData.author} on{' '}
              <time dateTime={caseNewsData.publishedAt}>
                {new Date(caseNewsData.publishedAt).toLocaleDateString()}
              </time>
            </p>
          </footer>
        </div>
      </section>

      <ContactUs />
    </article>
  )
}
