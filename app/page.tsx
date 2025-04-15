import Link from 'next/link';
import Image from 'next/image';

import data from '@/data.json';
import Posts from '@/components/posts';
import Projects from '@/components/projects';

export default function Home() {
  const posts = data.posts.slice(0, 3);
  const projects = data.projects.slice(0, 5);

  return (
    <main className="container mx-auto max-w-3xl grow space-y-8 px-8">
      <section className="gap-8 space-y-8 sm:flex sm:items-center sm:space-y-0">
        <Image
          priority
          width={175}
          height={175}
          src={data.profile}
          alt="Arsalan Ansari"
          className="w-44 rounded-lg grayscale sm:order-1"
        />
        <main className="space-y-4">
          <h1 className="font-serif text-3xl font-bold">I&apos;m Arsalan.</h1>
          <p className="text-muted-foreground font-light">
            I&apos;m a Fullstack Developer specializing in Next.JS to build
            fast, responsive, and scalable user interfaces. I like to write
            frontend code using React.js, Next.js and Tailwindcss.
          </p>
        </main>
      </section>
      <section className="space-y-8">
        <header>
          <h2 className="decoration-border/75 font-serif text-3xl font-bold underline decoration-2 underline-offset-8">
            Recent Posts
          </h2>
        </header>
        <main>
          {posts.length > 0 && <Posts posts={posts} />}
          {posts.length === 0 && (
            <p className="text-muted-foreground">No posts currently.</p>
          )}
        </main>
        <footer>
          <Link
            href="/posts"
            className="text-muted-foreground hover:text-foreground leading-1 underline decoration-1 underline-offset-2 transition-colors"
          >
            All posts
          </Link>
        </footer>
      </section>
      <section className="space-y-8">
        <header>
          <h2 className="decoration-border/75 font-serif text-3xl font-bold underline decoration-2 underline-offset-8">
            Recent Projects
          </h2>
        </header>
        <main>
          {projects.length > 0 && <Projects projects={projects} />}
          {projects.length === 0 && (
            <p className="text-muted-foreground">No projects currently.</p>
          )}
        </main>
        <footer>
          <Link
            href="/projects"
            className="text-muted-foreground hover:text-foreground leading-1 underline decoration-1 underline-offset-2 transition-colors"
          >
            All projects
          </Link>
        </footer>
      </section>
    </main>
  );
}
