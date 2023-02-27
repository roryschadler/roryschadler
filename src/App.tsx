import { createContext } from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';

import './App.css';
import HeaderBar from 'components/composite/HeaderBar';
import Main from 'components/composite/Main';
import { useDarkTheme } from 'hooks/useDarkTheme';

export const ToggleColorModeContext = createContext({
  toggleColorMode: () => {
    return;
  },
});

function App() {
  const { toggleColorMode, theme } = useDarkTheme();
  return (
    <ToggleColorModeContext.Provider value={toggleColorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <HeaderBar />
        <Main />
      </ThemeProvider>
    </ToggleColorModeContext.Provider>
  );
}

export default App;
