'use client';

import { useQuery } from '@tanstack/react-query';
import { notFound } from 'next/navigation';
import { SubmitEvent, useState } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';

import Footer from '@/components/footer';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { repositoryURL } from '@/lib/constants';
import { Response, ApiError } from '@/lib/types';

const schema = z.object({
  email: z.string().email({ message: 'Enter a valid email.' }),
  message: z.string().min(10, { message: 'Should be atleast 10 characters' }),
  name: z.string().min(1, { message: 'Name is required.' })
});

export default function Page() {
  const [state, setState] = useState<{
    errors: { name?: string[]; email?: string[]; message?: string[] };
  } | null>(null);

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

  function handleSend(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const result = schema.safeParse({
      email: formData.get('email'),
      message: formData.get('message'),
      name: formData.get('name')
    });

    if (result.error)
      return setState({ errors: result.error.flatten().fieldErrors });

    setState(null);
    toast.success('We have received your request.');
  }

  return (
    <>
      <Header resume={data.social.resume} />
      <main className='relative top-24 container mx-auto max-w-3xl grow px-8'>
        <section className='space-y-8'>
          <header className='space-y-8'>
            <h1 className='decoration-border/75 font-serif text-3xl font-bold underline decoration-2 underline-offset-8'>
              Let&apos;s talk about your project
            </h1>
          </header>
          <main>
            <form className='space-y-4' onSubmit={handleSend}>
              <div className='space-y-1'>
                <Input name='name' placeholder='Your Name' type='text' />
                {state?.errors?.name && (
                  <p className='text-destructive text-xs'>
                    {state.errors.name}
                  </p>
                )}
              </div>
              <div className='space-y-1'>
                <Input
                  name='email'
                  placeholder='your.name@domain.com'
                  type='email'
                />
                {state?.errors?.email && (
                  <p className='text-destructive text-xs'>
                    {state.errors.email}
                  </p>
                )}
              </div>
              <div className='space-y-1'>
                <Textarea name='message' placeholder='Your message...' />
                {state?.errors?.message && (
                  <p className='text-destructive text-xs'>
                    {state.errors.message}
                  </p>
                )}
              </div>
              <Button className='w-full'>Send</Button>
            </form>
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
