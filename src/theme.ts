import { createTheme, PaletteMode, responsiveFontSizes } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const getTheme = (mode: PaletteMode) =>
  responsiveFontSizes(
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
        mode,
        background: {
          default: mode === 'light' ? '#ffffff' : '#121212',
        },
      },
      typography: {
        fontFamily: 'Roboto',
        h6: {
          fontSize: '2rem',
          marginTop: '0.8rem',
          marginBottom: '0.8rem',
        },
      },
      components: {
        MuiIconButton: {
          defaultProps: {
            color: 'inherit',
          },
        },
        MuiLink: {
          defaultProps: {
            color: 'inherit',
          },
        },
      },
    })
  );

export default getTheme;
