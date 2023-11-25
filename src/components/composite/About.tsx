import { Skeleton } from '@mui/material';

import aboutLocalSource from 'assets/about-me.md';
import SectionHeader from 'components/libraries/mui/SectionHeader';
import Markdown from 'components/libraries/react-markdown/Markdown';
import useFetchMarkdown from 'hooks/useFetchMarkdown';

const aboutGitHubSource =
  'https://raw.githubusercontent.com/roryschadler/roryschadler/main/src/assets/about-me.md';

const About = () => {
  const { data: aboutMe, isLoading: isAboutMeLoading } = useFetchMarkdown(
    ['about'],
    aboutLocalSource,
    aboutGitHubSource
  );

  return (
    <section aria-labelledby="aboutMe">
      <SectionHeader id="aboutMe">About Me</SectionHeader>
      {isAboutMeLoading && <Skeleton width="100%" height="10em" />}
      <Markdown>{aboutMe}</Markdown>
    </section>
  );
};

export default About;
