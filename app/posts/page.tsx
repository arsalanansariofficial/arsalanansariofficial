'use client';

import { useState } from 'react';

import data from '@/data.json';
import Posts from '@/components/posts';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Page() {
  let filteredPosts = data.posts;
  const [filter, setFilter] = useState<string>(String());

  if (filter) {
    filteredPosts = data.posts.filter(post => {
      const searchValue = filter.toLocaleLowerCase();
      return post.title.toLocaleLowerCase().includes(searchValue);
    });
  }

  return (
    <main className="container mx-auto max-w-3xl grow px-8">
      <section className="space-y-4">
        <header className="space-y-4">
          <h1 className="decoration-border/75 font-serif text-3xl font-bold underline decoration-2 underline-offset-8">
            Posts
          </h1>
          <div className="flex gap-2">
            <Input
              type="text"
              value={filter}
              placeholder="Search posts..."
              onChange={e => setFilter(e.target.value)}
            />
            {filter && (
              <Button variant="secondary" onClick={() => setFilter(String())}>
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
