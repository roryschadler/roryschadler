import { QueryKey, QueryOptions, useQuery } from 'react-query';

import makeGitHubSource from 'utils/makeGitHubSource';

const useFetchMarkdown = (
  key: QueryKey,
  localPath: string,
  options?: QueryOptions<string>
) => {
  return useQuery<string>(
    key,
    () =>
      fetch(import.meta.env.DEV ? localPath : makeGitHubSource(localPath))
        .then((res) => res.text())
        .catch(async () => {
          // if the fetch fails, try to get the markdown from the local copy
          return fetch(localPath).then((res) => res.text());
        }),
    options
  );
};

export default useFetchMarkdown;
