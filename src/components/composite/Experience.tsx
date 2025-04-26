import { Skeleton } from '@mui/material';

import lilaSource from 'assets/lila.md';
import materialsmineSource from 'assets/materialsmine.md';
import zapataSource from 'assets/zapata.md';
import SectionHeader from 'components/libraries/mui/SectionHeader';
import Markdown from 'components/libraries/react-markdown/Markdown';
import useFetchMarkdown from 'hooks/useFetchMarkdown';

const Experience = () => {
  const { data: lila, isLoading: isLilaLoading } = useFetchMarkdown(
    ['career', 'lila'],
    lilaSource
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
      {isLilaLoading && <Skeleton width="100%" height="10em" />}
      <Markdown>{lila}</Markdown>
      {isZapataLoading && <Skeleton width="100%" height="10em" />}
      <Markdown>{zapata}</Markdown>
      {isMaterialsMineLoading && <Skeleton width="100%" height="10em" />}
      <Markdown>{materialsmine}</Markdown>
    </section>
  );
};

export default Experience;
