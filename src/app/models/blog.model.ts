export interface BlogPost {
  data: PostData;
}

export interface PostData {
  title?: string;
  content?: string;
  media?: File;
}

export interface BlogResponse {
  data: ResponseData;
  meta: Meta;
}

export interface ResponseData {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  content: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Meta {}
