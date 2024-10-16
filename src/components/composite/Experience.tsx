import { Skeleton } from '@mui/material';

import fl97Source from 'assets/career/fl97.md';
import materialsmineSource from 'assets/career/materialsmine.md';
import zapataSource from 'assets/career/zapata.md';
import SectionHeader from 'components/libraries/mui/SectionHeader';
import Markdown from 'components/libraries/react-markdown/Markdown';
import useFetchMarkdown from 'hooks/useFetchMarkdown';

const Experience = () => {
  const { data: fl97, isLoading: isFL97Loading } = useFetchMarkdown(
    ['career', 'fl97'],
    fl97Source
  );
  const { data: zapata, isLoading: isZapataLoading } = useFetchMarkdown(
    ['career', 'zapata'],
    zapataSource
  );
  const { data: materialsmine, isLoading: isMaterialsMineLoading } =
    useFetchMarkdown(['career', 'materialsmine'], materialsmineSource);

  return (
    <section aria-labelledby="expHeader">
      <SectionHeader id="expHeader">Experience</SectionHeader>
      {isFL97Loading && <Skeleton width="100%" height="10em" />}
      <Markdown>{fl97}</Markdown>
      {isZapataLoading && <Skeleton width="100%" height="10em" />}
      <Markdown>{zapata}</Markdown>
      {isMaterialsMineLoading && <Skeleton width="100%" height="10em" />}
      <Markdown>{materialsmine}</Markdown>
    </section>
  );
};

export default Experience;
