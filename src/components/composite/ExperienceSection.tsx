import React from 'react';

import { Typography } from '@mui/material';

import ExperienceItem from '../atomic/ExperienceItem';
import experiences from '../../assets/experience';

const ExperienceSection = () => {
  return (
    <section>
      <Typography variant="h6" component="h2">
        Experience
      </Typography>
      {experiences.map((exp, index) => (
        <ExperienceItem
          {...exp}
          key={index}
          last={index >= experiences.length - 1}
        />
      ))}
    </section>
  );
};

export default ExperienceSection;
