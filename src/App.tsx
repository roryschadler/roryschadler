import { CssBaseline, ThemeProvider } from '@mui/material';
import { createContext } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

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
  const queryClient = new QueryClient();
  const { toggleColorMode, theme } = useDarkTheme();
  return (
    <QueryClientProvider client={queryClient}>
      <ToggleColorModeContext.Provider value={toggleColorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme />
          <HeaderBar />
          <Main />
        </ThemeProvider>
      </ToggleColorModeContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
