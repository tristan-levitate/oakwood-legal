import React from 'react'
import type { Metadata } from 'next';
import DualHero from '@/components/globals/dual-hero/dual-hero'
import ContactUs from '@/components/globals/contact-us/contact-us'
import { getArticleBySlug } from '@/sanity/lib/api'
import PortableTextComponent from '@/components/globals/portable-text-component/portable-text-component'

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const article = await getArticleBySlug(slug);
    if (!article) {
      return {
        title: "Not Found | Oakwood Legal Group",
        description: "The page you are looking for does not exist",
      };
    }
    return {
      title: `${article.titleForSEO} | Oakwood Legal Group`,
      description: article.descriptionForSEO,
    };
  } catch (error) {
    return {
      title: "Not Found | Oakwood Legal Group",
      description: "The page you are looking for does not exist",
    };
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return (
      <main className="relative z-20">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <p>The article you are looking for does not exist.</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <article className="relative z-20">
      <DualHero
        titleWhite={article.title}
        message={article.description}
        backgroundImage={article.imageUrl}
        page="article-slug"
      />
      
      {/* Article Content */}
      <section className="w-full max-w-[1050px] mx-auto px-8 py-16 max-[900px]:px-4 max-[900px]:py-12">
        <PortableTextComponent content={article.content} />
      </section>
      
      <ContactUs />
    </article>
  )
}
