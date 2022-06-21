import React from 'react';

import './App.css';

import { CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';

import getTheme from './theme';
import HeaderBar from './components/composite/HeaderBar';
import Main from './components/composite/Main';

const initialColorMode = 'light';

export const ToggleColorModeContext = React.createContext({
  toggleColorMode: () => {
    return;
  },
});

export const ColorModeContext =
  React.createContext<PaletteMode>(initialColorMode);

function App(): React.ReactElement {
  const [mode, setMode] = React.useState<PaletteMode>(initialColorMode);
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
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
  return (
    <ColorModeContext.Provider value={mode}>
      <ToggleColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <HeaderBar />
          <Main />
        </ThemeProvider>
      </ToggleColorModeContext.Provider>
    </ColorModeContext.Provider>
  );
}

export default App;
