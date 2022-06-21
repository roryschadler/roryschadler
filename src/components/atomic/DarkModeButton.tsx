import { DarkMode, LightMode } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { ColorModeContext, ToggleColorModeContext } from '../../App';

const DarkModeButton = () => {
  const toggleColorMode = React.useContext(ToggleColorModeContext);
  const colorMode = React.useContext(ColorModeContext);

  return (
    <IconButton onClick={toggleColorMode.toggleColorMode}>
      {colorMode === 'light' ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
};

export default DarkModeButton;
