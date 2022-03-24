import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Avatar,
  useScrollTrigger,
} from '@mui/material';

import headshot from '../assets/rory_schadler.png';

type Props = {
  children: React.ReactElement;
};

function ElevationScroll({ children }: Props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function Header(): React.ReactElement {
  return (
    <ElevationScroll>
      <AppBar position="sticky" enableColorOnDark>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <h1>Rory Schadler</h1>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton>
              <Avatar alt="Rory Schadler" src={headshot}></Avatar>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;
