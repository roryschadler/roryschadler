import { Typography } from '@mui/material';

import materialsmineLocalSource from 'assets/career/materialsmine.md';
import zapataLocalSource from 'assets/career/zapata.md';
import Markdown from 'components/atomic/Markdown';
import useFetchMarkdown from 'hooks/useFetchMarkdown';

const materialsmineGitHubSource =
  'https://raw.githubusercontent.com/roryschadler/roryschadler/main/src/assets/career/materialsmine.md';
const zapataGitHubSource =
  'https://raw.githubusercontent.com/roryschadler/roryschadler/main/src/assets/career/zapata.md';

const Experience = () => {
  const { data: zapata } = useFetchMarkdown(
    ['career', 'zapata'],
    zapataLocalSource,
    zapataGitHubSource
  );
  const { data: materialsmine } = useFetchMarkdown(
    ['career', 'materialsmine'],
    materialsmineLocalSource,
    materialsmineGitHubSource
  );
  return (
    <section aria-labelledby="expHeader">
      <Typography
        variant="h4"
        fontWeight="bold"
        component="h2"
        marginBottom="0.8rem"
        id="expHeader"
      >
        Experience
      </Typography>
      <Markdown>{zapata}</Markdown>
      <Markdown>{materialsmine}</Markdown>
    </section>
  );
};

export default Experience;
