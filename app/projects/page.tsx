'use client';

import { useState } from 'react';

import Footer from '@/components/footer';
import Header from '@/components/header';
import Projects from '@/components/projects';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import data from '@/data.json';

export default function Page() {
  let filteredProjects = data.projects;
  const [filter, setFilter] = useState<string>(String());

  if (filter)
    filteredProjects = data.projects.filter(post => {
      const searchValue = filter.toLocaleLowerCase();
      return post.title.toLocaleLowerCase().includes(searchValue);
    });

  return (
    <>
      <Header resume={data.social.resume} />
      <main className='container mx-auto max-w-3xl grow px-8'>
        <section className='space-y-4'>
          <header className='space-y-4'>
            <h1 className='decoration-border/75 font-serif text-3xl font-bold underline decoration-2 underline-offset-8'>
              Projects
            </h1>
            <div className='flex gap-2'>
              <Input
                onChange={e => setFilter(e.target.value)}
                placeholder='Search projects...'
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
            <Projects projects={filteredProjects} />
          </main>
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
