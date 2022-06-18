import { Container } from '@mui/material';
import React from 'react';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';

function Main(): React.ReactElement {
  return (
    <Container maxWidth="sm" component={'main'}>
      <AboutSection />
      <ExperienceSection />
    </Container>
  );
}

export default Main;
