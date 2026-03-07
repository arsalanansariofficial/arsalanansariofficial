import { useQuery } from '@tanstack/react-query';
import { notFound } from 'next/navigation';

import { Response, ApiError } from '@/lib/types';

export default function useSlug(dataURL: string, slugURL: string) {
  const { data, error, isFetching } = useQuery<Response, ApiError>({
    async queryFn() {
      try {
        const response = await fetch(dataURL);

        if (!response.ok)
          throw new ApiError(response.status, response.statusText);

        return await response.json();
      } catch (error: unknown) {
        throw new ApiError(500, (error as Error).message);
      }
    },
    queryKey: ['data']
  });

  const {
    data: md,
    error: slugError,
    isFetching: isSlugFetching
  } = useQuery<string, ApiError>({
    async queryFn() {
      try {
        const response = await fetch(slugURL);

        if (!response.ok)
          throw new ApiError(response.status, response.statusText);

        return await response.text();
      } catch (error: unknown) {
        throw new ApiError(500, (error as Error).message);
      }
    },
    queryKey: ['slug']
  });

  if (error && error.status === 404) notFound();
  if (error) throw new Error(error.message);

  if (slugError && slugError.status === 404) notFound();
  if (slugError) throw new Error(slugError.message);

  return { data, isFetching, isSlugFetching, md };
}
