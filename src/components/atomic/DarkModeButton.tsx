import React from 'react';
import { DarkMode, LightMode } from '@mui/icons-material';
import { IconButton, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import { ToggleColorModeContext } from '../../App';

const DarkModeButton = () => {
  const toggleColorMode = React.useContext(ToggleColorModeContext);
  const theme = useTheme();

  return (
    <Tooltip
      title={`Switch to ${
        theme.palette.mode === 'light' ? 'dark' : 'light'
      } mode`}
    >
      <IconButton
        onClick={toggleColorMode.toggleColorMode}
        size={useMediaQuery(theme.breakpoints.down('sm')) ? 'medium' : 'large'}
      >
        {theme.palette.mode === 'light' ? <LightMode /> : <DarkMode />}
      </IconButton>
    </Tooltip>
  );
};

export default DarkModeButton;
