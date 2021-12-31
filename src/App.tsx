import React from 'react';
import './App.css';
import About from './components/About';

import { NavBar } from './components/NavBar';
import Works from './components/Works';
import SkillsAndInterests from './components/SkillsAndInterests';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import HeroSection from './components/Hero';

function App() {
  const [themeFlagState, setthemeFlagState] = React.useState({
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
      <div className="App">
        <NavBar themeFlagState={themeFlagState} setState={setthemeFlagState} />
        <HeroSection />
        <About />
        <SkillsAndInterests />
        <Works />
      </div>
    </ThemeProvider>
  );
}

export default App;
