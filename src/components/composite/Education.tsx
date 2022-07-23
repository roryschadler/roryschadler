import React from 'react';
import { Typography } from '@mui/material';

import educations from '../../assets/education';
import Item from '../atomic/Item';

const Education = () => {
  return (
    <section aria-labelledby="eduHeader">
      <Typography variant="h6" component="h2" id="eduHeader">
        Education
      </Typography>
      {educations.map((edu, index) => (
        <Item {...edu} key={index} last={index >= educations.length - 1} />
      ))}
    </section>
  );
};

export default Education;
