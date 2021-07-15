import React from "react";
import CreateReminder from "../components/Reminders/CreateReminder";
import { Box, Grid, Typography } from "@material-ui/core";
  

function RemindersPage({
  onSubmitFunc,
  allReminders,
  setAllReminders,
  onChecked,
}) {

  return (
    <div>
      <Box borderBottom={1} style={{ marginBottom: "15px", borderBlockEndWidth: "2px" }}
      >
        <Typography variant="h3" align="center">
          Reminders
        </Typography>
      </Box>
      <Typography variant="h6" align="center" style={{ marginTop: "10px" }}>
        Create a Reminder
      </Typography>
      <Grid justifyContent="center">
        <div align="center" style={{ marginTop: "15px" }}>
          <CreateReminder
            onChecked={onChecked}
            onSubmitFunc={onSubmitFunc}
            allReminders={allReminders}
            setAllReminders={setAllReminders}
          />
        </div>
      </Grid>
    </div>
  );
}

export default RemindersPage;
