import { Typography } from '@mui/material';

import dartmouthLocalSource from 'assets/education/dartmouth.md';
import Markdown from 'components/atomic/Markdown';
import useFetchMarkdown from 'hooks/useFetchMarkdown';

const dartmouthGitHubSource =
  'https://raw.githubusercontent.com/roryschadler/roryschadler/main/src/assets/education/dartmouth.md';

const Education = () => {
  const { data: dartmouth } = useFetchMarkdown(
    ['education', 'dartmouth'],
    dartmouthLocalSource,
    dartmouthGitHubSource
  );
  return (
    <section aria-labelledby="eduHeader">
      <Typography
        variant="h4"
        fontWeight="bold"
        component="h2"
        marginBottom="0.8rem"
        id="eduHeader"
      >
        Education
      </Typography>
      <Markdown>{dartmouth}</Markdown>
    </section>
  );
};

export default Education;
