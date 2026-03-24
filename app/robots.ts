import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/studio/',
          '/studio/*',
          '/api/',
          '/api/*',
          '/_next/',
          '/_next/*',
          '/admin/',
          '/admin/*',
        ],
      },
    ],
    sitemap: 'https://oakwoodlegal.com/sitemap.xml',
  }
}
