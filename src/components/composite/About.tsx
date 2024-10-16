import { Skeleton } from '@mui/material';

import aboutSource from 'assets/about-me.md';
import SectionHeader from 'components/libraries/mui/SectionHeader';
import Markdown from 'components/libraries/react-markdown/Markdown';
import useFetchMarkdown from 'hooks/useFetchMarkdown';

const About = () => {
  const { data: aboutMe, isLoading: isAboutMeLoading } = useFetchMarkdown(
    ['about'],
    aboutSource
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
