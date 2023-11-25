import { Skeleton } from '@mui/material';

import dartmouthLocalSource from 'assets/education/dartmouth.md';
import SectionHeader from 'components/libraries/mui/SectionHeader';
import Markdown from 'components/libraries/react-markdown/Markdown';
import useFetchMarkdown from 'hooks/useFetchMarkdown';

const dartmouthGitHubSource =
  'https://raw.githubusercontent.com/roryschadler/roryschadler/main/src/assets/education/dartmouth.md';

const Education = () => {
  const { data: dartmouth, isLoading: isDartmouthLoading } = useFetchMarkdown(
    ['education', 'dartmouth'],
    dartmouthLocalSource,
    dartmouthGitHubSource
  );
  return (
    <section aria-labelledby="eduHeader">
      <SectionHeader id="eduHeader">Education</SectionHeader>
      {isDartmouthLoading && <Skeleton width="100%" height="10em" />}
      <Markdown>{dartmouth}</Markdown>
    </section>
  );
};

export default Education;
