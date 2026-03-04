export type ResponseType = 'post' | 'project';

export class ApiError extends Error {
  constructor(
    public status: number,
    public message: string
  ) {
    super(message);
  }
}

export type Response = {
  intro: string;
  author: string;
  profile: string;
  social: {
    email: string;
    gitHub: string;
    resume: string;
    whatsApp: string;
    linkedIn: string;
  };
  posts: {
    slug: string;
    title: string;
    image: string;
    author: string;
    summary: string;
    publishedAt: string;
  }[];
  projects: {
    slug: string;
    title: string;
    image: string;
    author: string;
    summary: string;
    publishedAt: string;
  }[];
};
