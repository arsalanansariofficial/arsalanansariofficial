import Link from 'next/link';
import Image from 'next/image';

import { formatDate } from '@/lib/utils';

type Props = {
  projects: {
    slug: string;
    title: string;
    image: string;
    author: string;
    summary: string;
    publishedAt: string;
  }[];
};

export default function Projects({ projects }: Props) {
  return (
    <ul className="grid gap-8 sm:grid-cols-2">
      {projects.map(project => (
        <li key={project.slug}>
          <Link
            href={`/projects/${project.slug}`}
            className="group relative block h-80 sm:h-60"
          >
            <Image
              fill
              priority
              src={project.image}
              alt={project.title}
              className="aspect-video rounded-lg transition-transform duration-500 group-hover:scale-105 sm:aspect-square"
            />
            <div className="bg-background/70 absolute inset-0.5 flex flex-col rounded-sm p-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
              <div className="mt-auto translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <h2 className="line-clamp-1 font-serif text-3xl font-bold">
                  {project.title}
                </h2>
                <p className="text-md line-clamp-1 italic">{project.summary}</p>
                <p className="text-sm">{formatDate(project.publishedAt)}</p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
