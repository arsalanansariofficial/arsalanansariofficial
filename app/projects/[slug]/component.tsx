'use client';

import { ArrowLeftIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import Footer from '@/components/footer';
import Header from '@/components/header';
import useSlug from '@/hooks/useSlug';
import { repositoryURL } from '@/lib/constants';
import { formatDate } from '@/lib/utils';

export default function Component() {
  const params = useParams();
  const response = useSlug(
    `${repositoryURL}/blog/author.json`,
    `${repositoryURL}/markdowns/projects/${params.slug}.md`
  );

  if (response.isFetching || response.isSlugFetching)
    return <span className='m-auto font-serif text-xl'>Loading...</span>;

  if (!response.data || !response.md) return;

  const project = response.data.projects.find(
    project => project.slug === params.slug
  )!;

  return (
    <>
      <Header resume={response.data.social.resume} />
      <main className='relative top-24 container mx-auto max-w-3xl grow px-8'>
        <section className='space-y-4'>
          <header className='space-y-2'>
            <Link
              className='text-muted-foreground hover:text-foreground flex gap-2 text-sm font-light transition-colors'
              href='/projects'>
              <ArrowLeftIcon className='h-5 w-5' />
              <span>Back to projects</span>
            </Link>
            <div className='relative h-80'>
              <Image
                alt='Project Image'
                className='aspect-video rounded-lg'
                fill
                priority
                src={project.image}
              />
            </div>
          </header>
          <main className='space-y-4'>
            <h1 className='decoration-border/75 font-serif text-3xl font-bold underline decoration-2 underline-offset-8'>
              {project.title}
            </h1>
            <p className='text-muted-foreground text-xs'>
              {project.author} / {formatDate(project.publishedAt)}
            </p>
          </main>
          <footer className='prose dark:prose-invert max-w-none'>
            <ReactMarkdown
              children={response.md}
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGfm]}
            />
          </footer>
        </section>
      </main>
      <Footer
        email={response.data.social.email}
        gitHub={response.data.social.gitHub}
        linkedIn={response.data.social.linkedIn}
        whatsApp={response.data.social.whatsApp}
      />
    </>
  );
}
