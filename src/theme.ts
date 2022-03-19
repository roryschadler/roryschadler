import { createTheme, responsiveFontSizes } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

let themeOptions = createTheme({
  palette: {
    primary: {
      main: '#145014',
    },
    secondary: {
      main: '#052d05',
    },
    info: {
      main: '#267aba',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
});

themeOptions = responsiveFontSizes(themeOptions);

export const theme = themeOptions;
