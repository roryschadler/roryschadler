import React from 'react';
import { Link, Typography, TypographyProps } from '@mui/material';

const bodyTypographyProps: TypographyProps = {
  variant: 'body1',
  sx: {
    marginTop: '0.8rem',
    marginBottom: '0.8rem',
  },
};

const About = () => {
  return (
    <section aria-labelledby="aboutHeader">
      <Typography variant="h6" component="h2" id="aboutHeader">
        About Me
      </Typography>
      <Typography {...bodyTypographyProps}>
        I&apos;m a front-end developer with a deep interest in helping industry
        apply quantum computing tools to accelerate their workflows and tackle
        interesting problems. I&apos;m especially interested in using quantum
        and classical computing together to improve the drug discovery process.
        I have experience building websites and web applications with React,
        Vue, and Node.js, and I&apos;ve also worked in Python.
      </Typography>
      <Typography {...bodyTypographyProps}>
        I&apos;m currently working as a Front End Engineer for{' '}
        <Link
          variant="inherit"
          target="_blank"
          href="https://www.zapatacomputing.com/"
        >
          Zapata Computing
        </Link>
        , in Boston, Massachusetts. On the Quantum Platform team I contribute to
        Orquestra Studio, a platform for building and deploying quantum-enhanced
        enterprise applications. My focus is on developing high-performance user
        interfaces to be used by scientists and DevOps professionals to develop
        quantum and machine learning solutions and run them in an enterprise
        environment.
      </Typography>
      <Typography {...bodyTypographyProps}>
        I&apos;m a Dartmouth graduate, with a degree in Physics modified with
        Computer Science and a minor in Chinese language. I&apos;m enthusiastic
        about solving problems, using my analytic and computational skills to
        approach a problem from many angles. I thrive most when given a hard
        problem and the freedom to solve it, whether that problem is a tricky
        design consideration, a quantum algorithm, or a giant rock that needs to
        be moved. (Ask me about my work with the Appalachian Mountain Club.)
      </Typography>
    </section>
  );
};

export default About;
