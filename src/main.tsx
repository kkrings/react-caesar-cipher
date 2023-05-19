import * as React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createRoot } from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import { deDE } from '@mui/material/locale';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { App } from './App.tsx';

const container = document.getElementById('root');
const root = container && createRoot(container);
const theme = createTheme(undefined, deDE);

root?.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <App />
      </>
    </ThemeProvider>
  </React.StrictMode>,
);
