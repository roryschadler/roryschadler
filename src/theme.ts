import { createTheme, responsiveFontSizes } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#145014',
      },
      secondary: {
        main: '#052d05',
        dark: '#447d3e',
      },
      info: {
        main: '#267aba',
      },
    },
    typography: {
      fontFamily: 'Roboto',
    },
  })
);
