'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import data from '@/data.json';
import MenuToggle from '@/components/menu-toggle';
import ThemeToggle from '@/components/theme-toggle';

export default function Header() {
  const router = useRouter();

  return (
    <header className="bg-background/75 fixed inset-x-0 top-0 z-10 backdrop-blur-sm">
      <nav className="container mx-auto flex max-w-3xl items-center justify-between px-8 py-4">
        <button
          onClick={() => router.push('/')}
          className="font-serif text-2xl font-bold cursor-pointer"
        >
          AA
        </button>
        <ul className="hidden text-sm sm:flex sm:gap-4">
          <li className="hover:text-foreground text-muted-foreground transition-colors">
            <Link href="/posts">Posts</Link>
          </li>
          <li className="hover:text-foreground text-muted-foreground transition-colors">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="hover:text-foreground text-muted-foreground transition-colors">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="hover:text-foreground text-muted-foreground transition-colors">
            <a href={data.social.resume}>Resume</a>
          </li>
        </ul>
        <ThemeToggle />
        <MenuToggle />
      </nav>
    </header>
  );
}
