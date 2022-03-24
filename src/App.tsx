import React from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';

import theme from './theme';

function App(): React.ReactElement {
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
