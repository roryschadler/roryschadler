import { Skeleton } from '@mui/material';

import dartmouthSource from 'assets/dartmouth.md';
import SectionHeader from 'components/libraries/mui/SectionHeader';
import Markdown from 'components/libraries/react-markdown/Markdown';
import useFetchMarkdown from 'hooks/useFetchMarkdown';

const Education = () => {
  const { data: dartmouth, isLoading: isDartmouthLoading } = useFetchMarkdown(
    ['education', 'dartmouth'],
    dartmouthSource
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
