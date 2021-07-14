import React, { useState } from "react";
import {
  TextField,
  Typography,
  makeStyles,
  Button,
  Container,
} from "@material-ui/core";


const reminderStyle = makeStyles({
  textfield1: {
    marginTop: "5px",
    width: "40%",
  },

  textfield2: {
    marginTop: "5px",
    width: "30%%"
  },

  button: {
    background: "primary",
    marginTop: "4px",
    position: 'absolute', 
    left: '50%', 
    top: '50%', 
    transform: 'translate(30%, -320%)'
  },

  form:{
    position: 'absolute', 
    left: '50%', 
    top: '50%', 
    transform: 'translate(-15%, -300%)'
  }
});


function CreateReminder() {
  const classes = reminderStyle();

  const [reminders, setReminders] = useState({
    title: null,
    due: null,
    completed: false,
  });


  return (
    <div>
      <Typography variant="h5">Creat a reminder</Typography>

      <form className={classes.form} noValidate>
        <TextField
          label="Reminder"
          variant="outlined"
          className={classes.textfield1}
          required
        />

        <TextField
          type="date"
          className={classes.textfield2}
          variant="outlined"
          required
        />

      </form>
      <Button
        type="submit"
        disableElevation
        variant="contained"
        className={classes.button}
        color="secondary"
      >
        Add Reminder
      </Button>
      
    </div>
  );
}

export default CreateReminder;
