import React from 'react';
import './App.css';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

import About from './components/About';
import { NavBar } from './components/NavBar';
import Works from './components/Works';
import SkillsAndInterests from './components/SkillsAndInterests';
import HeroSection from './components/Hero';

function App() {
  const [themeFlagState] = React.useState({
    themeFlag: true,
  });

  // TODO: for dark mode
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeFlagState.themeFlag ? 'dark' : 'light',
        },
      }),
    [themeFlagState]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='App'>
        <NavBar />
        <HeroSection />
        <About />
        <SkillsAndInterests />
        <Works />
      </div>
    </ThemeProvider>
  );
}

export default App;
