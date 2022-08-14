import * as React from 'react';
import { useState, useEffect } from 'react';
import { CssBaseline, useMediaQuery, PaletteMode } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';
import Menu from './core/Menu';

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        //light mode
        background: {
          default: '#f0f0f0',
        },
        primary: {
          main: '#616161',
          light: '#6746c3',
          darker: '#000063',
        },
      } : {
        //dark mode
        background: {
          default: '#212121',
        },
        primary: {
          main: '#424242',
          light: '#473479',
          darker: '#000025',
        },
      }
    )
  }
});

export default function App() {
  const prefersDarkMode: boolean = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<PaletteMode>();

  useEffect(() => {
    setMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Menu toggleColorMode={toggleColorMode} />
        </Router>
      </ThemeProvider>
    </div>
  );
}