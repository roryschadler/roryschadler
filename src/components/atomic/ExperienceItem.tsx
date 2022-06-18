import { Box, Divider, Typography, styled } from '@mui/material';
import React from 'react';

const LI = styled('li')({});
const UL = styled('ul')({});

export interface Experience {
  company: string;
  startDate: string;
  endDate?: string;
  roles: {
    title: string;
    description: string[];
    startDate?: string;
    endDate?: string;
  }[];
  location?: string;
  last?: boolean;
}

const ExperienceItem = ({
  company,
  startDate,
  endDate,
  roles,
  location,
  last,
}: Experience) => {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Typography fontWeight="bold" variant="body1" noWrap>
          {company}
        </Typography>
        {location && <Typography variant="body1">, {location}</Typography>}
        <Box sx={{ flexGrow: 1 }}></Box>
        <Typography fontWeight="bold" variant="body1">
          {startDate} — {endDate ?? 'Present'}
        </Typography>
      </Box>
      {roles.map((role, roleIndex) => (
        <Box key={roleIndex}>
          <Typography variant="body1">{role.title}</Typography>
          {role.startDate && (
            <Typography variant="body2">
              {role.startDate} — {role.endDate ?? 'Present'}
            </Typography>
          )}
          <UL sx={{ marginTop: 0.5, ':last-of-type': { marginBottom: 1.5 } }}>
            {role.description.map((des, descIndex) => (
              <LI key={descIndex}>{des}</LI>
            ))}
          </UL>
        </Box>
      ))}
      {last || <Divider sx={{ marginBottom: 1.5 }} />}
    </>
  );
};

export default ExperienceItem;
