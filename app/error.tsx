'use client';

import { Button } from '@/components/ui/button';

export default function Error(props: {
  reset: () => void;
  error: Error & { digest?: string };
}) {
  return (
    <main className='container mx-auto max-w-3xl grow content-center justify-items-center space-y-4 px-8'>
      <p className='text-muted-foreground text-center text-3xl font-bold'>
        500
      </p>
      <h1 className='text-center text-2xl font-bold'>
        {props.error.message || 'Something went wrong!'}
      </h1>
      <Button
        className='block cursor-pointer'
        onClick={() => props.reset()}
        variant='secondary'>
        Try again
      </Button>
    </main>
  );
}
