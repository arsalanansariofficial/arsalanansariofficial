import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeftIcon } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';

import data from '@/data.json';
import { formatDate } from '@/lib/utils';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return data.projects.map(post => ({ slug: post.slug }));
}

export default async function Page({ params }: Props) {
  const slug = (await params).slug;
  const post = data.projects.find(post => post.slug === slug);

  if (!post) notFound();

  const result = await fetch(
    `https://raw.githubusercontent.com/arsalanansariofficial/resources/refs/heads/main/markdowns/projects/${slug}.md`
  );

  return (
    <main className="px-8">
      <section className="container mx-auto max-w-3xl space-y-4">
        <header className="space-y-2">
          <Link
            href="/projects"
            className="text-muted-foreground hover:text-foreground flex gap-2 text-sm font-light transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            <span>Back to projects</span>
          </Link>
          <div className="relative h-80">
            <Image
              fill
              priority
              src={post.image}
              alt="Post Image"
              className="aspect-video rounded-lg"
            />
          </div>
        </header>
        <main className="space-y-4">
          <h1 className="decoration-border/75 font-serif text-3xl font-bold underline decoration-2 underline-offset-8">
            {post.title}
          </h1>
          <p className="text-muted-foreground text-xs">
            {post.author} / {formatDate(post.publishedAt)}
          </p>
        </main>
        <footer className="prose dark:prose-invert max-w-none">
          <MDXRemote source={await result.text()} />
        </footer>
      </section>
    </main>
  );
}
