import { Container } from '@mui/material';
import React from 'react';
import About from './About';
import Education from './Education';
import Experience from './Experience';

function Main(): React.ReactElement {
  return (
    <Container maxWidth="sm" component={'main'}>
      <About />
      <Experience />
      <Education />
    </Container>
  );
}

export default Main;
