import Link from 'next/link';

import { formatDate } from '@/lib/utils';

type Props = {
  posts: {
    slug: string;
    title: string;
    image: string;
    author: string;
    summary: string;
    publishedAt: string;
  }[];
};

export default function Posts({ posts }: Props) {
  return (
    <ul>
      <li>
        {posts.map(post => (
          <Link
            key={post.slug}
            href={`posts/${post.slug}`}
            className="space-y-1 sm:flex sm:justify-between sm:gap-4 sm:space-y-0"
          >
            <header className="max-w-lg sm:grow sm:space-y-1">
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <p className="text-muted-foreground line-clamp-2 text-sm font-light">
                {post.summary}
              </p>
            </header>
            <footer>
              <p className="text-sm font-light">
                {formatDate(post.publishedAt)}
              </p>
            </footer>
          </Link>
        ))}
      </li>
    </ul>
  );
}
