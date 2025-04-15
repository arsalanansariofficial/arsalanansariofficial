'use client';

import { useState } from 'react';

import data from '@/data.json';
import Projects from '@/components/projects';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Page() {
  let filteredProjects = data.projects;
  const [filter, setFilter] = useState<string>(String());

  if (filter) {
    filteredProjects = data.projects.filter(post => {
      const searchValue = filter.toLocaleLowerCase();
      return post.title.toLocaleLowerCase().includes(searchValue);
    });
  }

  return (
    <main className="container mx-auto max-w-3xl grow px-8">
      <section className="space-y-4">
        <header className="space-y-4">
          <h1 className="decoration-border/75 font-serif text-3xl font-bold underline decoration-2 underline-offset-8">
            Projects
          </h1>
          <div className="flex gap-2">
            <Input
              type="text"
              value={filter}
              placeholder="Search projects..."
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
          <Projects projects={filteredProjects} />
        </main>
      </section>
    </main>
  );
}
