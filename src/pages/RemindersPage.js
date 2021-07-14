import React from "react";
import CreateReminder from "../components/Reminders/CreateReminder";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

function RemindersPage() {
  return (
    <div>
      <Typography variant="h3" align="center">
        Reminders
      </Typography>
      <div align="center" style={{ justifyContent: "center" }}>
        <CreateReminder />
      </div>
    </div>
  );
}

export default RemindersPage;
