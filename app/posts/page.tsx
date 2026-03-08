'use client';

import { useState } from 'react';

import Footer from '@/components/footer';
import Header from '@/components/header';
import Posts from '@/components/posts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useData from '@/hooks/useData';
import { repositoryURL } from '@/lib/constants';

export default function Page() {
  const [filter, setFilter] = useState<string>(String());
  const response = useData(`${repositoryURL}/blog/author.json`, filter, 'post');

  if (response.isFetching)
    return <span className='m-auto font-serif text-xl'>Loading...</span>;

  if (!response.data) return;

  return (
    <>
      <Header resume={response.data.social.resume} />
      <main className='relative top-24 container mx-auto max-w-3xl grow px-8'>
        <section className='space-y-4'>
          <header className='space-y-4'>
            <h1 className='decoration-border/75 font-serif text-3xl font-bold underline decoration-2 underline-offset-8'>
              Posts
            </h1>
            <div className='flex gap-2'>
              <Input
                onChange={e => setFilter(e.target.value)}
                placeholder='Search posts...'
                type='text'
                value={filter}
              />
              {filter && (
                <Button onClick={() => setFilter(String())} variant='secondary'>
                  Reset
                </Button>
              )}
            </div>
          </header>
          <main>
            <Posts posts={response.filteredData} />
          </main>
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
