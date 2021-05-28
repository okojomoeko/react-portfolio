import React from "react";
import "./App.css";
import About from "./components/About";

import { NavBar } from "./components/NavBar";
import Works from "./components/Works";
import SkillsAndInterests from "./components/SkillsAndInterests";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  const [themeFlagState, setthemeFlagState] = React.useState({
    themeFlag: true,
  });
  console.log(themeFlagState);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: themeFlagState.themeFlag ? "dark" : "light",
        },
      }),
    [themeFlagState]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <NavBar themeFlagState={themeFlagState} setState={setthemeFlagState} />
        <About />
        <SkillsAndInterests />
        <Works />
      </div>
    </ThemeProvider>
  );
}

export default App;
