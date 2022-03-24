import { Container } from '@mui/material';
import React from 'react';

function Main(): React.ReactElement {
  return (
    <Container maxWidth="md" component={'main'}>
      <h1>About Me</h1>
      <p>
        I&apos;m a recent graduate of Dartmouth College, with a BA in Physics
        modified with Computer Science and a minor in Chinese language. In my
        time at Dartmouth, I cultivated a strong interest in Quantum Computing,
        especially in its potential uses in drug discovery and materials science
        more broadly. I am looking to expand my knowledge of current
        computational drug discovery, using Machine Learning and AI-powered
        decision making to improve the design and discovery process. I&apos;m
        enthusiastic about solving problems, using my analytic and computational
        skills to approach a problem from many angles. My coursework at
        Dartmouth reflects my problem-solving interest, including field-specific
        classes in quantum mechanics and quantum computing as well as courses on
        the tools to tackle them, like physical computing and machine learning.
        I thrive most when given a hard problem and the freedom to solve it,
        whether that problem is a physics problem set, a tricky design
        consideration, or a giant rock that needs to be moved. (See my work with
        the Appalachian Mountain Club.) I also love to work in teams, working
        alongside teammates to create new solutions or leading them to solutions
        I&apos;ve already found.
      </p>
    </Container>
  );
}

export default Main;
