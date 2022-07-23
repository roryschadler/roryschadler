import React from 'react';
import {
  AppBar,
  Grid,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';

import Avatar from '../atomic/Avatar';
import LinkedInButton from '../atomic/LinkedInButton';
import GitHubButton from '../atomic/GitHubButton';
import DarkModeButton from '../atomic/DarkModeButton';

type Props = {
  children: React.ReactElement;
};

const ElevationScroll = ({ children }: Props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const HeaderBar = (): React.ReactElement => {
  return (
    <ElevationScroll>
      <AppBar position="sticky" enableColorOnDark aria-label="Header Bar">
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            spacing={1}
            alignItems="center"
          >
            <Grid item xs={6}>
              <Typography component="h1" variant="h4" fontWeight="500">
                Rory Schadler
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Stack direction="row-reverse" alignItems="center">
                <Avatar />
                <LinkedInButton />
                <GitHubButton />
                <DarkModeButton />
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default HeaderBar;
