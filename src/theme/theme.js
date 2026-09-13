import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#175cd3', dark: '#124aa8', light: '#eaf2ff', contrastText: '#fff' },
    secondary: { main: '#0e9384' },
    background: { default: '#ffffff', paper: '#ffffff' },
    text: { primary: '#101828', secondary: '#475467' },
    divider: '#e4e7ec',
  },
  typography: {
    fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: { fontWeight: 750, letterSpacing: '-0.045em', lineHeight: 1.05 },
    h2: { fontWeight: 720, letterSpacing: '-0.035em', lineHeight: 1.12 },
    h3: { fontWeight: 700, letterSpacing: '-0.02em' },
    button: { textTransform: 'none', fontWeight: 700 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { borderRadius: 8, padding: '11px 20px' } },
    },
    MuiCard: { styleOverrides: { root: { backgroundImage: 'none' } } },
  },
});

export default theme;
