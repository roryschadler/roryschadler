import React from 'react';
import { Typography } from '@mui/material';

import educations from '../../assets/education';
import Item from '../atomic/Item';

const Education = () => {
  return (
    <section>
      <Typography variant="h6" component="h2">
        Education
      </Typography>
      {educations.map((edu, index) => (
        <Item {...edu} key={index} last={index >= educations.length - 1} />
      ))}
    </section>
  );
};

export default Education;
