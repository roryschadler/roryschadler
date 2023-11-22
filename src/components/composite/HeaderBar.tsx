import {
  AppBar,
  Grid,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import { cloneElement } from 'react';

import Avatar from 'components/atomic/Avatar';
import DarkModeButton from 'components/atomic/DarkModeButton';
import GitHubButton from 'components/atomic/GitHubButton';
import LinkedInButton from 'components/atomic/LinkedInButton';

type Props = {
  children: React.ReactElement;
};

const ElevationScroll = ({ children }: Props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const HeaderBar = () => {
  return (
    <ElevationScroll>
      <AppBar
        position="sticky"
        enableColorOnDark
        aria-label="Header Bar"
        sx={{ marginBottom: 2 }}
      >
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            spacing={1}
            alignItems="center"
          >
            <Grid item xs={6}>
              <Typography component="h1" variant="h4" fontWeight="bolder">
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
