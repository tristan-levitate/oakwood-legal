import type {
  ArticleProps,
  AwardsProps,
  MemberProps,
  OtherAreaProps,
  PracticeAreaProps,
  ResultProps,
  SqueezeProps,
  TestimonialProps,
} from "@/types/types";
import { client } from "./client";
import {
  getAllResultsQuery,
  getAllTestimonialsQuery,
  getArticleBySlugQuery,
  getLatestArticlesQuery,
  getOtherAreaBySlugQuery,
  getPracticeAreaBySlugQuery,
  getSqueezeBySlugQuery,
  getAllArticleSlugsQuery,
  getAllMembersQuery,
  getMemberBySlugQuery,
  getAllPracticeAreasQuery,
  getAllAwardsQuery,
  getAllOtherAreasQuery,
} from "./queries";

export const getArticleBySlug = async (
  slug: string
): Promise<ArticleProps | null> => {
  if (!slug) return null;

  const data = await client.fetch(
    getArticleBySlugQuery,
    {
      slug,
    },
    {
      next: {
        revalidate: 24 * 60 * 60,
      },
    }
  );

  if (!data) return null;

  return data;
};

//! Start Article Queries
export const getAllArticles = async (): Promise<ArticleProps[]> => {
  const data = await client.fetch(getAllArticleSlugsQuery);

  if (!data) return [];

  return data;
};

// Type for article cards - only the properties returned by the query
type ArticleCard = Pick<ArticleProps, 'title' | 'description' | 'slug' | 'imageUrl'>;

export const getLatestArticles = async (): Promise<ArticleCard[]> => {
  const data = await client.fetch(getLatestArticlesQuery);

  if (!data) return [];

  return data;
};
//! End Article Queries

//? Start Testimonial Queries
export const getAllTestimonials = async (): Promise<TestimonialProps[]> => {
  const data = await client.fetch(getAllTestimonialsQuery);

  if (!data) return [];

  return data;
};

//! Start Member Queries

export const getAllMembers = async (): Promise<MemberProps[]> => {
  const data = await client.fetch(getAllMembersQuery);

  if (!data) return [];

  return data;
};

export const getMemberBySlug = async (
  slug: string
): Promise<MemberProps | null> => {
  if (!slug) return null;

  const data = await client.fetch(getMemberBySlugQuery, { slug });

  if (!data) return null;

  return data;
};

//! Start Case Queries
export const getAllResults = async (): Promise<ResultProps[]> => {
  const data = await client.fetch(getAllResultsQuery);

  if (!data) return [];

  return data;
};
//! End Case Queries

// Type for practice area cards - only the properties returned by the query
type PracticeAreaCard = Pick<PracticeAreaProps, 'titleForSEO' | 'descriptionForSEO' | 'title' | 'slug' | 'description' | 'date' | 'imageUrl'>;

export const getAllPracticeAreas = async (): Promise<PracticeAreaCard[]> => {
  const data = await client.fetch(getAllPracticeAreasQuery);

  if (!data) return [];

  return data;
};
//! Start Practice Area Queries
export const getPracticeAreaBySlug = async (
  slug: string
): Promise<PracticeAreaProps | null> => {
  if (!slug) return null;

  const data = await client.fetch(getPracticeAreaBySlugQuery, {
    slug,
  });

  if (!data) return null;

  return data;
};

export const getOtherAreaBySlug = async (
  slug: string
): Promise<OtherAreaProps | null> => {
  if (!slug) return null;

  const data = await client.fetch(getOtherAreaBySlugQuery, {
    slug,
  });

  if (!data) return null;

  return data;
};

export const getAllOtherAreas = async (): Promise<
  Pick<OtherAreaProps, "slug" | "title" | "titlePage">[]
> => {
  const data = await client.fetch(getAllOtherAreasQuery);
  if (!data) return [];
  return data;
};
//! End Practice Area Queries

//! Start Squeeze Queries
export const getSqueezeBySlug = async (
  slug: string
): Promise<SqueezeProps | null> => {
  const data = await client.fetch(getSqueezeBySlugQuery, { slug });

  if (!data) return null;

  return data;
};
//! End Squeeze Queries

//! Start Awards Queries
export const getAllAwards = async (): Promise<AwardsProps[]> => {
  const data = await client.fetch(getAllAwardsQuery);

  if (!data) return [];

  return data;
};
//! End Awards Queries
