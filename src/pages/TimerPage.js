import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import NavBar from "../components/NavBarComponents/NavBar";
import Pomodoro from "../components/Timer/Pomodoro";

function TimerPage() {
  return (
    <div>
      <Typography variant="h3" align="center">
        Study Timer
      </Typography>
      <div align="center">
        <Pomodoro />
      </div>
    </div>
  );
}

export default TimerPage;
