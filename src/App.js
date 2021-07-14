import React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import TimerPage from './pages/TimerPage';
import UnitsPage from "./pages/UnitsPage";
import RemindersPage from "./pages/RemindersPage";
import Homepage from "./pages/Homepage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#05445E",
      light: "#D4F1F4"

    },

    secondary: {
      main: "#189AB4",
    },
  },

  typography: {
    fontFamily: "Noto Sans, sans-serif",
  },
});

function App() {


  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/'>
              <Homepage />
            </Route>
            <Route path='/timer'>
              <TimerPage/>
            </Route>
            <Route path='/units'>
              <UnitsPage/>
            </Route>
            <Route path ='/reminders'>
              <RemindersPage/>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
