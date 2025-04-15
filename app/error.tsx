'use client';

import { Button } from '@/components/ui/button';

export default function Error(props: { reset: () => void }) {
  return (
    <main className="container mx-auto max-w-3xl grow content-center justify-items-center space-y-2 px-8">
      <p className="text-muted-foreground text-center text-3xl font-bold">
        500
      </p>
      <h1 className="text-center text-2xl font-bold">Something went wrong!</h1>
      <Button
        variant="secondary"
        className="cursor-pointer"
        onClick={() => props.reset()}
      >
        Try again
      </Button>
    </main>
  );
}
