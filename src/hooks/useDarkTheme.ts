import { useMediaQuery, PaletteMode } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import getTheme from 'theme';

export const useDarkTheme = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<PaletteMode>(
    prefersDarkMode ? 'dark' : 'light'
  );

  // react to user changing system mode
  useEffect(() => {
    setMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  const toggleColorMode = useMemo(
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
  const theme = useMemo(() => getTheme(mode), [mode]);
  return { toggleColorMode, theme };
};
