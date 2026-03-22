import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#00e676' },
    background: { default: '#050505', paper: 'rgba(20, 20, 20, 0.85)' },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: { backdropFilter: 'blur(10px)' },
      },
    },
  },
});
