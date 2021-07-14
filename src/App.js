import React from 'react';
import './App.css';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import UnitCard from './components/Units/UnitCard';
import UnitsPage from './pages/UnitsPage';
import NavBar from './components/NavBarComponents/NavBar';
import RemindersPage from './pages/RemindersPage';


const theme = createTheme({
  palette: {
    primary: {
      main: "#05445E"
    },

    secondary: {
      main: "#189AB4"
    }
  },

  typography: {
    fontFamily: "Noto Sans, sans-serif",
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
      <RemindersPage/>
    </ThemeProvider>
  );
}

export default App;
