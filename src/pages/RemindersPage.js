import React from "react";
import CreateReminder from "../components/Reminders/CreateReminder";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

function RemindersPage({onSubmitFunc, allReminders, setAllReminders, onChecked}) {

  return (
    <div>
      <Typography variant="h3" align="center">
        Reminders
      </Typography>
      <div align="center" style={{ justifyContent: "center" }}>
        <CreateReminder onChecked={onChecked} onSubmitFunc={onSubmitFunc} allReminders={allReminders} setAllReminders={setAllReminders}/>
      </div>
    </div>
  );
}

export default RemindersPage;
