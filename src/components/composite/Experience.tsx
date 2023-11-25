import { Skeleton } from '@mui/material';

import materialsmineLocalSource from 'assets/career/materialsmine.md';
import zapataLocalSource from 'assets/career/zapata.md';
import SectionHeader from 'components/libraries/mui/SectionHeader';
import Markdown from 'components/libraries/react-markdown/Markdown';
import useFetchMarkdown from 'hooks/useFetchMarkdown';

const materialsmineGitHubSource =
  'https://raw.githubusercontent.com/roryschadler/roryschadler/main/src/assets/career/materialsmine.md';
const zapataGitHubSource =
  'https://raw.githubusercontent.com/roryschadler/roryschadler/main/src/assets/career/zapata.md';

const Experience = () => {
  const { data: zapata, isLoading: isZapataLoading } = useFetchMarkdown(
    ['career', 'zapata'],
    zapataLocalSource,
    zapataGitHubSource
  );
  const { data: materialsmine, isLoading: isMaterialsMineLoading } =
    useFetchMarkdown(
      ['career', 'materialsmine'],
      materialsmineLocalSource,
      materialsmineGitHubSource
    );
  return (
    <section aria-labelledby="expHeader">
      <SectionHeader id="expHeader">Experience</SectionHeader>
      {isZapataLoading && <Skeleton width="100%" height="10em" />}
      <Markdown>{zapata}</Markdown>
      {isMaterialsMineLoading && <Skeleton width="100%" height="10em" />}
      <Markdown>{materialsmine}</Markdown>
    </section>
  );
};

export default Experience;
