import React from "react";
import CreateReminder from "../components/Reminders/CreateReminder";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";

function RemindersPage() {
  return (
    <div>
      <Typography variant="h3" align="center">
        Reminders
      </Typography>
      <Grid justifyContent="center">
        <div align="center" style={{marginTop: "30px"}}>
          <CreateReminder />
        </div>
      </Grid>
    </div>
  );
}

export default RemindersPage;
