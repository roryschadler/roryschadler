import React from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';

import theme from './theme';
import Header from './components/Header';
import Main from './components/Main';

function App(): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Main />
    </ThemeProvider>
  );
}

export default App;
