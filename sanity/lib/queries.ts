import { groq } from "next-sanity";

/** articles */
export const getArticleBySlugQuery = groq`
  *[_type == "articles" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    titleForSEO,
    descriptionForSEO,
    description,
    date,
    category,
    "imageUrl": image.asset->url,
    categories[]->{
      title,
      "slug": slug.current
    },
    content, 
    "prev": *[_type == "articles" && _createdAt < ^._createdAt] | order(_createdAt desc)[0] {
      "slug": slug.current,
      date
    },
    "next": *[_type == "articles" && _createdAt > ^._createdAt] | order(_createdAt asc)[0] {
      "slug": slug.current,
      date
    }
  }
`;

export const getLatestArticlesQuery = groq`
  *[_type == "articles"] | order(date desc) {
    title,
    description,
    "slug": slug.current,
    "imageUrl": image.asset->url
  }
`;

/** testimonials */
export const getAllTestimonialsQuery = groq`
  *[_type == "testimonials"] | order(_createdAt asc) {
    _id,
    rating,
    testimony,
    author
  }
`;

/** results */
export const getAllResultsQuery = groq`
  *[_type == "results"] | order(_createdAt asc) {
    _id,
    resultDetails,
    verdict
  }
`;

/** awards */
export const getAllAwardsQuery = groq`
  *[_type == "awards"] | order(_createdAt asc) {
    _id,
    title,
    awardDetails
  }
`;

/** members */
export const getAllMembersQuery = groq`
  *[_type == "members"] | order(_createdAt asc) {
    _id,
    seo_title,
    seo_description,
    name,
    "slug": slug.current,
    role,
    "imageUrl": image.asset->url,
    content,
  }
`;

export const getAllPracticeAreasQuery = groq`
  *[_type == "practiceAreas"] | order(orderRank) {
    titleForSEO,
    descriptionForSEO,
    title,
    "slug": slug.current,
    description,
    date,
    "imageUrl": image.asset->url
  }
`;

export const getPracticeAreaBySlugQuery = groq`
  *[_type == "practiceAreas" && slug.current == $slug][0] {
    titleForSEO,
    descriptionForSEO,
    title,
    "slug": slug.current,
    description,
    date,
    "imageUrl": image.asset->url,
    content
  }
`;


export const getOtherAreaBySlugQuery = groq`
  *[_type == "otherAreas" && slug.current == $slug][0]{
    titleForSEO,
    descriptionForSEO,
    description,
    "imageUrl": image.asset->url,
    title,
    subTitle,
    date,
    "slug": slug.current,
    content,
    "practiceAreaSlug": *[_type == "practiceAreas" && references(^._id)][0].slug.current,
    "otherAreas": *[_type == "practiceAreas" && references(^._id)][0].otherAreas[]->{
      title,
      subTitle,
      "slug": slug.current,
      "imageUrl": image.asset->url
    }
  }
`;

export const getSqueezeBySlugQuery = groq`
  *[_type == "squeeze" && slug.current == $slug][0] {
    titleForSEO,
    descriptionForSEO,
    title,
    subtitle,
    "slug": slug.current,
    description,
    video {
      videoType,
      videoFile {
        asset->{
          _ref,
          _type,
          url
        }
      },
      videoUrl
    },
    content
  }
`;

// Sitemap queries
export const getAllArticleSlugsQuery = groq`
  *[_type == "articles" && defined(slug.current)] {
    "slug": slug.current,
    title,
    description,
    category,
    "imageUrl": image.asset->url,
    date,
    titleForSEO,
    descriptionForSEO,
    content,
    _updatedAt
  }
`;

export const getAllSqueezeSlugsQuery = groq`
  *[_type == "squeeze" && defined(slug.current)] {
    "slug": slug.current,
    _updatedAt
  }
`;

export const getAllPracticeAreaSlugsQuery = groq`
  *[_type == "practiceAreas" && defined(slug.current)] {
    "slug": slug.current,
    _updatedAt
  }
`;

export const getAllOtherAreaSlugsQuery = groq`
  *[_type == "otherAreas" && defined(slug.current)] {
    "slug": slug.current,
    _updatedAt,
    "practiceAreaSlug": *[_type == "practiceAreas" && references(^._id)][0].slug.current
  }
`;

export const getMemberBySlugQuery = groq`
  *[_type == "members" && slug.current == $slug][0] {
    seo_title,
    seo_description,
    name,
    "slug": slug.current,
    role,
    "imageUrl": image.asset->url,
    content,
    videoUrl,

  }
`;

export const getAllOtherAreasQuery = groq`
  *[_type == "otherAreas"] {
    _id,
    "slug": slug.current,
    description,
    title,
    titlePage
  }
`;
