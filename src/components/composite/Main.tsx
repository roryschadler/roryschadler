import { Container } from '@mui/material';

import About from './About';
import Education from './Education';
import Experience from './Experience';

const Main = () => {
  return (
    <Container maxWidth="sm" component={'main'} aria-label="CV">
      <About />
      <Experience />
      <Education />
    </Container>
  );
};

export default Main;
