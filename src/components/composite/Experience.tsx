import React from 'react';

import { Typography } from '@mui/material';

import Item from '../atomic/Item';
import experiences from '../../assets/experience';

const Experience = () => {
  return (
    <section>
      <Typography variant="h6" component="h2">
        Experience
      </Typography>
      {experiences.map((exp, index) => (
        <Item {...exp} key={index} last={index >= experiences.length - 1} />
      ))}
    </section>
  );
};

export default Experience;
