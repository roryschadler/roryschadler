import React from 'react';

import './App.css';

import { CssBaseline, ThemeProvider } from '@mui/material';

import theme from './theme';
import Header from './components/composite/Header';
import Main from './components/composite/Main';

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
