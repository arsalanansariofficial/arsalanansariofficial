import Component from '@/app/projects/[slug]/component';
import { repositoryURL } from '@/lib/constants';
import { Response } from '@/lib/types';

export async function generateStaticParams() {
  const response = await fetch(`${repositoryURL}/blog/author.json`);
  const data = (await response.json()) as Response;
  return data.projects.map(post => ({ slug: post.slug }));
}

export default function Page() {
  return <Component />;
}
