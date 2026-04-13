import { TypedObject } from "sanity";

export interface SourceSchema {
  asset: {
    _ref: string;
    _type: string;
  };
  content: TypedObject | TypedObject[];
}

export interface ImageSchema {
  _type: string;
  _key: string;
  caption: string;
  asset: SourceSchema;
}

/*testimonials */
export interface TestimonialProps {
  _id: string;
  testimony: string;
  rating: number;
  author: string;
}

/* awards */
export interface AwardsProps {
  _id: string;
  title: string;
  awardDetails: string;
}

/* articles */
export interface ArticleProps {
  title: string;
  slug: string;
  link?: string;
  titleForSEO: string;
  descriptionForSEO: string;
  description: string;
  date: string;
  type: string;
  imageUrl: string;
  content: TypedObject | TypedObject[];
}

/* cases in the news */
export interface CaseInTheNewsProps {
  title: string;
  slug: string;
  link?: string;
  titleForSEO: string;
  descriptionForSEO: string;
  description: string;
  date: string;
  type: string;
  imageUrl: string;
  content: TypedObject | TypedObject[];
}

/* results */
export interface ResultProps {
  _id: string;
  verdict: string;
  resultDetails: string;
}

/*squeeze */
export interface SqueezeProps {
  titleForSEO: string;
  descriptionForSEO: string;
  title: string;
  subtitle: string;
  slug: string;
  description: string;
  video?: {
    videoType: "file" | "url";
    videoFile?: {
      asset: {
        _ref: string;
        _type: string;
        url: string;
      };
    };
    videoUrl?: string;
  };
  content: TypedObject | TypedObject[];
}

/*members */
export interface MemberProps {
  _id: string;
  seo_title: string;
  seo_description: string;
  name: string;
  slug: string;
  role: string;
  imageUrl: string;
  content: TypedObject | TypedObject[];
}

/* practice areas */
export interface PracticeAreaProps {
  titleForSEO: string;
  descriptionForSEO: string;
  description: string;
  imageUrl: string;
  title: string;
  slug: string;
  subTitle: string;
  content: TypedObject | TypedObject[];
  otherAreas: OtherAreaProps[];
  titlePage: string;
  date: string;
}

/* other areas */
export interface OtherAreaProps {
  titleForSEO: string;
  descriptionForSEO: string;
  description: string;
  imageUrl: string;
  title: string;
  slug: string;
  subTitle: string;
  content: TypedObject | TypedObject[];
  titlePage: string;
}

/* Sub Menu - Practice Areas */
export type PracticeAreaMenuItem = {
  title: string;
  slug: string;
}
