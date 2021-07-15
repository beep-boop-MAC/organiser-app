import React from "react";
import Pomodoro from "../components/Timer/Pomodoro";
import { Box, Card, CardContent, Grid, Typography } from "@material-ui/core";


function TimerPage() {


  return (
    <div>
      <Box borderBottom={1}
      style={{paddingBottom: "3px", borderBlockEndWidth: "2px" }}
      >
        <Typography variant="h3" align="center">
          Study Timer
        </Typography>
      </Box>
      <Grid container justifyContent="center">
        <div align="center">
          <Pomodoro />
        </div>
      </Grid>
      <Grid>
        <Card>
          <CardContent>
            <Typography variant="h7">Study Technique</Typography>
            <Typography variant="h5" style={{ marginTop: "8px" }}>
              Pomodoro
            </Typography>
            <Typography style={{ marginTop: "8px" }}>
              The Pomodoro Technique is a great study tool to help combat
              distractions, build consistency in results and to make it easier
              to get started.
            </Typography>

            <Typography variant="h6" style={{ marginTop: "8px" }}>
              To get started:
            </Typography>

            <Typography>Start the timer and work for 25 minutes.</Typography>

            <Typography>Take a 5 minute break.</Typography>

            <Typography>Do it all over again.</Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default TimerPage;
