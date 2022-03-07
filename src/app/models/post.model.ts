export interface Post {
  data: PostDatum[];
  meta: Meta;
}

export interface PostDatum {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  slug: string;
  tags: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  content: string;
  title: string;
  images: Images;
}

export interface Images {
  data: ImagesDatum[];
}

export interface ImagesDatum {
  id: number;
  attributes: ImageAttributes;
}

export interface ImageAttributes {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Formats {
  thumbnail: ImageDetails;
  large: ImageDetails;
  medium: ImageDetails;
  small: ImageDetails;
}

export interface ImageDetails {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: null;
  url: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
