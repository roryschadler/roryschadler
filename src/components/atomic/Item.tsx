import React from 'react';
import { Box, Divider, Typography, styled, Grid, Stack } from '@mui/material';

const LI = styled('li')({});
const UL = styled('ul')({});

interface ItemInterface {
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

export type ItemAriaProps = {
  [Property in keyof ItemInterface]?: string;
};

export interface ItemProps extends ItemInterface {
  ariaProps: ItemAriaProps;
}

const Item = ({
  title,
  startDate,
  endDate,
  subItems,
  subtitle,
  last,
  ariaProps,
}: ItemProps) => {
  const {
    title: ariaTitle,
    subItems: ariaSubItems,
    subtitle: ariaSubtitle,
  } = ariaProps;
  return (
    <>
      <Stack aria-label={title}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography
              fontWeight="bold"
              variant="body1"
              display="inline"
              aria-label={ariaTitle}
            >
              {title}
            </Typography>
            {subtitle && (
              <Typography
                variant="body1"
                display="inline"
                aria-label={ariaSubtitle}
              >
                , {subtitle}
              </Typography>
            )}
          </Grid>
          <Grid item>
            <Typography fontWeight="bold" variant="body1" aria-label="Dates">
              {startDate} — {endDate ?? 'Present'}
            </Typography>
          </Grid>
        </Grid>
        {subItems.map((subItem, subItemIndex) => (
          <Box key={subItemIndex}>
            <Typography variant="body1" aria-label={ariaSubItems}>
              {subItem.title}
            </Typography>
            {subItem.startDate && (
              <Typography variant="body2" aria-label="Dates">
                {subItem.startDate} — {subItem.endDate ?? 'Present'}
              </Typography>
            )}
            {subItem.text && (
              <UL
                sx={{ marginTop: 0.5, ':last-of-type': { marginBottom: 1.5 } }}
                aria-label="Detail"
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
