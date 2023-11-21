import { Typography } from '@mui/material';

import experiences from 'assets/experience';
import Item from 'components/atomic/Item';

const Experience = () => {
  return (
    <section aria-labelledby="expHeader">
      <Typography variant="h6" component="h2" id="expHeader">
        Experience
      </Typography>
      {experiences.map((exp, index) => (
        <Item {...exp} key={index} last={index >= experiences.length - 1} />
      ))}
    </section>
  );
};

export default Experience;
