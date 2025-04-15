import Link from 'next/link';
import { ArrowLeftIcon } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="container mx-auto max-w-3xl grow content-center justify-items-center space-y-2 px-8">
      <p className="text-muted-foreground text-center text-3xl font-bold">
        404
      </p>
      <h1 className="text-center text-2xl font-bold">Page not found</h1>
      <p className="text-muted-foreground text-center">
        Please check the URL in the address bar and try again.
      </p>
      <Link
        href="/"
        className="text-muted-foreground hover:text-foreground flex items-center gap-3 transition-colors"
      >
        <ArrowLeftIcon className="h-5 w-5" />
        <span>Go back home</span>
      </Link>
    </main>
  );
}
