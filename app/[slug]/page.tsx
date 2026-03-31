import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DualHero from '@/components/globals/dual-hero/dual-hero';
import PortableTextComponent from '@/components/globals/portable-text-component/portable-text-component';
import dynamic from 'next/dynamic';
import ContactUs from '@/components/globals/contact-us/contact-us'

const SqueezeForm = dynamic(() => import('@/components/globals/squeeze-form/squeeze-form'), {
  loading: () => <div className="h-[600px] animate-pulse bg-gray-100 rounded-lg" />
});

const LogosCarousel = dynamic(() => import('@/components/globals/carousel-slider/carousel-slider'), {
  loading: () => <div className="h-[120px] animate-pulse bg-gray-200 rounded" />
});
import BlurEffect from '@/components/globals/blur-effect/blur-effect';
import { getSqueezeBySlug, getPracticeAreaBySlug, getAllPracticeAreas } from '@/sanity/lib/api';
import { PracticeAreaProps } from '@/types/types';
import { getSqueezeFormVideos } from '@/utils/squeeze-form-videos';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;

    // First, try to get squeeze (case type) data
    const squeeze = await getSqueezeBySlug(slug);

    if (squeeze) {
      return {
        title: `${squeeze.titleForSEO} | Oakwood Legal Group`,
        description: squeeze.descriptionForSEO,
      };
    }

    // If not a squeeze, check if it's a practice area
    const practiceAreas = await getAllPracticeAreas();
    const practiceAreaMatch = practiceAreas.find(
      (practiceArea) => practiceArea.slug === slug
    );

    if (practiceAreaMatch) {
      const practiceArea = await getPracticeAreaBySlug(slug);

      if (!practiceArea) {
        return {
          title: "Practice Area Not Found | Oakwood Legal Group",
          description:
            "The specific practice area or legal service you're looking for cannot be found. Explore our main practice areas or contact us for assistance.",
        };
      }

      return {
        title: `${practiceArea.titleForSEO} | Oakwood Legal Group`,
        description: practiceArea.descriptionForSEO,
      };
    }

    return {
      title: "Page Not Found | Oakwood Legal Group",
      description:
        "The page you're looking for cannot be found. Contact our experienced attorneys to discuss your legal situation.",
    };
  } catch (error) {
    return {
      title: "Page Error | Oakwood Legal Group",
      description: "There was an error loading this page",
    };
  }
}

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // First, try to get squeeze (case type) data
  const squeeze = await getSqueezeBySlug(slug);

  if (squeeze) {
    // This is a case type (squeeze) page
    return (
      <main className="relative z-20">
        <DualHero
          titleWhite={squeeze.title}
          titleRed={squeeze.subtitle}
          message={squeeze.description}
          page="squeeze-page"
        />

        {/* Carousels Section */}
        <section className="mt-2 relative z-30">
          <div className="space-y-2">
            {/* News Carousel - Forward Direction */}
            <div className="w-full">
              <LogosCarousel variant="news" direction="forward" />
            </div>
          </div>
        </section>

        <section className="relative z-30 mx-auto px-8" aria-labelledby="squeeze-content">
          <h2 id="squeeze-content" className="sr-only">Squeeze Page Content</h2>
          
          {/* Two Column Layout */}
          <div className="flex flex-col min-[1080px]:flex-row gap-8 min-[1080px]:gap-12">
            {/* Left Column - Content */}
            <div className="flex-1 min-[1080px]:w-0 min-[1080px]:min-w-0">
              {squeeze.content && (
                <div className="prose prose-invert max-w-none">
                  <PortableTextComponent content={squeeze.content} />
                </div>
              )}
            </div>

            {/* Right Column - Form */}
            <aside className="w-full min-[1080px]:w-[400px] min-[1080px]:max-w-[400px] min-[1080px]:mr-10 flex-shrink-0">
              <div className="min-[1080px]:sticky min-[1080px]:top-8" id="squeeze-form">
                <SqueezeForm videos={getSqueezeFormVideos(slug)} />
              </div>
            </aside>
          </div>
        </section>
      </main>
    );
  }

  // If not a squeeze, check if it's a practice area
  const practiceAreas = await getAllPracticeAreas();
  const practiceAreaMatch = practiceAreas.find(
    (practiceArea) => practiceArea.slug === slug
  );

  if (practiceAreaMatch) {
    const practiceArea = await getPracticeAreaBySlug(slug);

    if (!practiceArea) {
      return notFound();
    }

    return (
      <main className="relative z-20">
        <DualHero
          titleWhite={practiceArea.title}
          message={practiceArea.description}
          backgroundImage={practiceArea.imageUrl}
          page="practice-area-slug"
        />

        <BlurEffect variant="practice-areas" />

        <section className="mt-20 relative z-30 max-w-4xl mx-auto px-8" aria-labelledby="practice-area-content">
          <h2 id="practice-area-content" className="sr-only">Practice Area Details</h2>
          
          {practiceArea.content && (
            <div className="prose prose-invert max-w-none">
              <PortableTextComponent content={practiceArea.content} />
            </div>
          )}
        </section>
        <ContactUs />
      </main>
    );
  }

  // If neither squeeze nor practice area, return 404
  return notFound();
}