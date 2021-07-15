import React, {useState} from "react";
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
  const [allReminders, setAllReminders] = useState([]);
  const [allUnits, setAllUnits] = useState([]);

  const setUnits = (unit) => {
    setAllUnits([...allUnits, unit]);
  }

  const onChecked = (id) => {
    const newReminders = allReminders.filter(elem => elem.id != id);
    setAllReminders(newReminders);
  }
  const setReminders = (reminder) => {
    setAllReminders([...allReminders, reminder]);
  }
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/'>
              <Homepage allReminders={allReminders} allUnits={allUnits}/>
            </Route>
            <Route path='/timer'>
              <TimerPage/>
            </Route>
            <Route path='/units'>
              <UnitsPage allUnits={allUnits} setAllUnits={setUnits}/>
            </Route>
            <Route path ='/reminders'>
              <RemindersPage onChecked={onChecked} allReminders={allReminders} setAllReminders={setReminders} onSubmitFunc={setReminders}/>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
