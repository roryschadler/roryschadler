import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import './App.css';

import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">Rory Schadler</header>
      </div>
    </ThemeProvider>
  );
}

export default App;
