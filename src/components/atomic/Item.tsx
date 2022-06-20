import { Box, Divider, Typography, styled, Grid, Stack } from '@mui/material';
import React from 'react';

const LI = styled('li')({});
const UL = styled('ul')({});

export interface ItemInterface {
  title: string;
  startDate: string;
  endDate?: string;
  subItems: {
    title?: string;
    text?: string[];
    startDate?: string;
    endDate?: string;
  }[];
  subtitle?: string;
  last?: boolean;
}

const Item = ({
  title,
  startDate,
  endDate,
  subItems,
  subtitle,
  last,
}: ItemInterface) => {
  return (
    <>
      <Stack>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography fontWeight="bold" variant="body1" display="inline">
              {title}
            </Typography>
            {subtitle && (
              <Typography variant="body1" display="inline">
                , {subtitle}
              </Typography>
            )}
          </Grid>
          <Grid item>
            <Typography fontWeight="bold" variant="body1">
              {startDate} — {endDate ?? 'Present'}
            </Typography>
          </Grid>
        </Grid>
        {subItems.map((subItem, subItemIndex) => (
          <Box key={subItemIndex}>
            <Typography variant="body1">{subItem.title}</Typography>
            {subItem.startDate && (
              <Typography variant="body2">
                {subItem.startDate} — {subItem.endDate ?? 'Present'}
              </Typography>
            )}
            {subItem.text && (
              <UL
                sx={{ marginTop: 0.5, ':last-of-type': { marginBottom: 1.5 } }}
              >
                {subItem.text.map((displayText, textIndex) => (
                  <LI key={textIndex}>{displayText}</LI>
                ))}
              </UL>
            )}
          </Box>
        ))}
      </Stack>
      {last || <Divider sx={{ marginBottom: 1.5 }} />}
    </>
  );
};

export default Item;
