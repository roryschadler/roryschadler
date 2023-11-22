import { Typography } from '@mui/material';

import aboutLocalSource from 'assets/about-me.md';
import Markdown, { defaultComponentsMap } from 'components/atomic/Markdown';
import useFetchMarkdown from 'hooks/useFetchMarkdown';

const aboutGitHubSource =
  'https://raw.githubusercontent.com/roryschadler/roryschadler/main/src/assets/about-me.md';

const About = () => {
  const { data: aboutMe } = useFetchMarkdown(
    ['about'],
    aboutLocalSource,
    aboutGitHubSource
  );

  return (
    <section aria-label="About me">
      <Markdown
        components={{
          ...defaultComponentsMap,
          h1: ({ children }) => (
            <Typography variant="h4" fontWeight="bold" component="h2">
              {children}
            </Typography>
          ),
        }}
      >
        {aboutMe}
      </Markdown>
    </section>
  );
};

export default About;
