'use client';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Footer from '@/components/footer';
import Header from '@/components/header';
import Posts from '@/components/posts';
import Projects from '@/components/projects';
import { repositoryURL } from '@/lib/constants';
import { ApiError, Response } from '@/lib/types';

export default function Home() {
  const { data, error, isFetching } = useQuery<Response, ApiError>({
    async queryFn() {
      try {
        const response = await fetch(`${repositoryURL}/blog/author.json`);

        if (!response.ok)
          throw new ApiError(response.status, response.statusText);

        return await response.json();
      } catch (error: unknown) {
        throw new ApiError(500, (error as Error).message);
      }
    },
    queryKey: ['data']
  });

  if (error && error.status === 404) notFound();
  if (error) throw new Error(error.message);

  if (isFetching)
    return <span className='m-auto font-serif text-xl'>Loading...</span>;

  if (!data) return;

  const posts = data.posts.slice(0, 3);
  const projects = data.projects.slice(0, 5);

  return (
    <>
      <Header resume={data.social.resume} />
      <main className='relative top-24 container mx-auto max-w-3xl grow space-y-8 px-8'>
        <section className='gap-8 space-y-8 sm:flex sm:items-center sm:space-y-0'>
          <Image
            alt='Arsalan Ansari'
            className='w-44 rounded-lg grayscale sm:order-1'
            height={175}
            priority
            src={data.profile}
            width={175}
          />
          <main className='space-y-4'>
            <h1 className='font-serif text-3xl font-bold'>{data.author}</h1>
            <p className='text-muted-foreground font-light'>{data.intro}</p>
          </main>
        </section>
        <section className='space-y-8'>
          <header>
            <h2 className='decoration-border/75 font-serif text-3xl font-bold underline decoration-2 underline-offset-8'>
              Recent Posts
            </h2>
          </header>
          <main>
            {posts.length > 0 && <Posts posts={posts} />}
            {posts.length === 0 && (
              <p className='text-muted-foreground'>No posts currently.</p>
            )}
          </main>
          <footer>
            <Link
              className='text-muted-foreground hover:text-foreground leading-1 underline decoration-1 underline-offset-2 transition-colors'
              href='/posts'>
              All posts
            </Link>
          </footer>
        </section>
        <section className='space-y-8'>
          <header>
            <h2 className='decoration-border/75 font-serif text-3xl font-bold underline decoration-2 underline-offset-8'>
              Recent Projects
            </h2>
          </header>
          <main>
            {projects.length > 0 && <Projects projects={projects} />}
            {projects.length === 0 && (
              <p className='text-muted-foreground'>No projects currently.</p>
            )}
          </main>
          <footer>
            <Link
              className='text-muted-foreground hover:text-foreground leading-1 underline decoration-1 underline-offset-2 transition-colors'
              href='/projects'>
              All projects
            </Link>
          </footer>
        </section>
      </main>
      <Footer
        email={data.social.email}
        gitHub={data.social.gitHub}
        linkedIn={data.social.linkedIn}
        whatsApp={data.social.whatsApp}
      />
    </>
  );
}
