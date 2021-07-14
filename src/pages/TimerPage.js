import React from "react";
import Pomodoro from "../components/Timer/Pomodoro";
import { Typography } from "@material-ui/core";

function TimerPage() {
  return (
    <div>
      <Typography variant="h3" align="center">
        Study Timer
      </Typography>
      <div align="center" style={{padding: '-10px 0'}}>
        <Pomodoro />
      </div>
    </div>
  );
}

export default TimerPage;
