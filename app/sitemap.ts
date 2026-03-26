import { MetadataRoute } from 'next'
import { getAllArticles, getAllPracticeAreas, getAllOtherAreas } from '@/sanity/lib/api'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://oakwoodlegal.com'

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date('2025-10-06T10:41:00.000Z'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date('2025-08-11T11:19:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-results`,
      lastModified: new Date('2025-04-22T14:33:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cases-in-the-news`,
      lastModified: new Date('2024-03-06T14:50:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/awards-recognitions`,
      lastModified: new Date('2024-04-24T20:18:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/practice-areas`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date('2024-04-24T20:14:00.000Z'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date('2024-04-24T21:32:00.000Z'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Practice area pages from old sitemap
  const practiceAreaPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/auto-accidents`,
      lastModified: new Date('2024-03-07T10:46:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/truck-accidents`,
      lastModified: new Date('2025-10-06T10:31:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/bicycle-accidents`,
      lastModified: new Date('2025-10-06T10:35:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/motorcycle-accidents`,
      lastModified: new Date('2025-10-06T10:35:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/uber-lyft-accidents`,
      lastModified: new Date('2025-10-06T10:37:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pedestrian-accidents`,
      lastModified: new Date('2025-10-06T10:39:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/boy-scouts-of-america-abuse`,
      lastModified: new Date('2024-03-07T10:54:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/clergy-sexual-abuse`,
      lastModified: new Date('2024-03-07T10:56:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/head-brain-injuries`,
      lastModified: new Date('2024-03-07T10:58:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/hit-run-accidents`,
      lastModified: new Date('2024-03-07T10:59:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sexual-abuse`,
      lastModified: new Date('2024-03-07T11:05:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/slips-trips-falls`,
      lastModified: new Date('2024-03-07T11:07:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/wrongful-death`,
      lastModified: new Date('2024-03-07T11:15:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Location-based pages from old sitemap
  const locationPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/los-angeles-car-accident-lawyer`,
      lastModified: new Date('2025-10-06T10:28:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sacramento-car-accident-lawyer`,
      lastModified: new Date('2024-04-25T08:10:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/anaheim-car-accident-lawyer`,
      lastModified: new Date('2024-04-25T08:48:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/oakland-car-accident-lawyer`,
      lastModified: new Date('2024-04-25T08:48:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/stockton-car-accident-lawyer`,
      lastModified: new Date('2024-04-25T09:05:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pasedena-car-accident-lawyer`,
      lastModified: new Date('2024-04-25T09:33:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/bakersfield-car-accident-lawyer`,
      lastModified: new Date('2024-04-25T09:41:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/fullerton-car-accident-lawyer`,
      lastModified: new Date('2024-04-25T09:48:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/riverside-car-accident-lawyer`,
      lastModified: new Date('2024-04-25T09:58:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ontario-car-accident-lawyer`,
      lastModified: new Date('2024-04-25T10:05:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  try {
    // Dynamic pages from Sanity CMS
    const [articles, practiceAreas, otherAreas] = await Promise.all([
      getAllArticles(),
      getAllPracticeAreas(),
      getAllOtherAreas(),
    ])

    // Article pages
    const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
      url: `${baseUrl}/articles/${article.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

    // Dynamic practice area pages from CMS
    const dynamicPracticeAreaPages: MetadataRoute.Sitemap = practiceAreas.map((area) => ({
      url: `${baseUrl}/${area.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))

    // Other area pages from CMS
    const otherAreaPages: MetadataRoute.Sitemap = otherAreas.map((area) => ({
      url: `${baseUrl}/${area.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

    return [
      ...staticPages,
      ...practiceAreaPages,
      ...locationPages,
      ...articlePages,
      ...dynamicPracticeAreaPages,
      ...otherAreaPages,
    ]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    // Return static pages if dynamic content fails
    return [
      ...staticPages,
      ...practiceAreaPages,
      ...locationPages,
    ]
  }
}
