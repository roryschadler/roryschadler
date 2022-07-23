import React from 'react';
import { useMediaQuery, PaletteMode } from '@mui/material';
import getTheme from '../theme';

export const useDarkTheme = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = React.useState<PaletteMode>(
    prefersDarkMode ? 'dark' : 'light'
  );

  // react to user changing system mode
  React.useEffect(() => {
    setMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  const toggleColorMode = React.useMemo(
    () => ({
      // The dark mode switch will invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => getTheme(mode), [mode]);
  return { toggleColorMode, theme };
};
