import { useQuery } from '@tanstack/react-query';
import { notFound } from 'next/navigation';
import { useMemo } from 'react';
import { useDebounce } from 'use-debounce';

import { Response, ApiError, ResponseType } from '@/lib/types';

export default function useData(
  url: string,
  filter: string,
  responseType: ResponseType
) {
  const [debouncedFilter] = useDebounce(filter, 300);

  const { data, error, isFetching } = useQuery<Response, ApiError>({
    async queryFn() {
      try {
        const response = await fetch(url);

        if (!response.ok)
          throw new ApiError(response.status, response.statusText);

        return await response.json();
      } catch (error: unknown) {
        throw new ApiError(500, (error as Error).message);
      }
    },
    queryKey: ['data']
  });

  const filteredData = useMemo(() => {
    if (!data) return [];

    switch (responseType) {
      case 'post':
        if (!debouncedFilter) return data.posts;
        return data.posts.filter(d =>
          d.title
            .toLowerCase()
            .includes(debouncedFilter.toLocaleLowerCase().trim())
        );
      default:
        if (!debouncedFilter) return data.projects;
        return data.projects.filter(d =>
          d.title.toLowerCase().includes(debouncedFilter.toLowerCase().trim())
        );
    }
  }, [data, debouncedFilter, responseType]);

  if (error && error.status === 404) notFound();
  if (error) throw new Error(error.message);

  return { data, filteredData, isFetching };
}
