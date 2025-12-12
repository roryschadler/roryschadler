import { QueryKey, QueryOptions, useQuery } from '@tanstack/react-query';

import makeGitHubSource from 'utils/makeGitHubSource';

const useFetchMarkdown = (
  key: QueryKey,
  localPath: string,
  options?: QueryOptions<string>
) => {
  return useQuery<string>({
    queryKey: key,
    queryFn: () =>
      fetch(import.meta.env.DEV ? localPath : makeGitHubSource(localPath))
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch markdown');
          }
          return res.text();
        })
        .catch(async () => {
          // if the fetch fails, try to get the markdown from the local copy
          return fetch(localPath).then((res) => res.text());
        }),
    ...options,
  });
};

export default useFetchMarkdown;
