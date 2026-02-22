'use client';

import { useState } from 'react';

import Posts from '@/components/posts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import data from '@/data.json';

export default function Page() {
  let filteredPosts = data.posts;
  const [filter, setFilter] = useState<string>(String());

  if (filter) 
    filteredPosts = data.posts.filter(post => {
      const searchValue = filter.toLocaleLowerCase();
      return post.title.toLocaleLowerCase().includes(searchValue);
    });
  

  return (
    <main className='container mx-auto max-w-3xl grow px-8'>
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
          <Posts posts={filteredPosts} />
        </main>
      </section>
    </main>
  );
}
