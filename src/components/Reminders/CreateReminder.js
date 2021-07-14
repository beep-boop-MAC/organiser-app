import React, { useState } from "react";
import {
  TextField,
  Button,
  makeStyles,
  FormGroup,
  Checkbox,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
} from "@material-ui/core";

const reminderStyle = makeStyles({
  textfield1: {
    width: "50%",
    position: "sticky",

  },

  textfield2: {
    width: "200px",
    position: "sticky",
  },

  form: {
    position: "sticky",
  },
});

function CreateReminder() {
  const classes = reminderStyle();
  const [allReminders, setAllReminders] = useState([]);
  const [reminders, setReminders] = useState({
    id: 0,
    title: null,
    due: null,
    completed: false,
  });

  const [date, setDate] = useState("");
  let count = allReminders.length;

  const addSingleReminder = (reminders) => {
    setAllReminders([...allReminders, reminders]);
  };

  const onChecked = (id) => {
    const newReminders = allReminders.filter((elem) => elem.id != id);
    setAllReminders(newReminders);
  };

  return (
    <div>
      <FormGroup className={classes.form}>
        <Grid container justifyContent="center">
          <TextField
            label="Reminder"
            id="margin-none"
            variant="outlined"
            className={classes.textfield1}
            multiline
            required
            onChange={(e) =>
              setReminders({
                ...reminders,
                title: e.target.value,
              })
            }
          />
          <TextField
            type="date"
            className={classes.textfield2}
            variant="outlined"
            required
            onChange={(e) => setDate(e.target.value)}
          />
        </Grid>
        <Grid container justifyContent="center" style={{paddingTop: "20px"}}>
          <Button
            type="submit"
            disableElevation
            variant="contained"
            color="secondary"
            onClick={(e) => {
              e.preventDefault();
              addSingleReminder({
                ...reminders,
                id: count++,
              });
            }}
          >
            Add Reminder
          </Button>
        </Grid>
      </FormGroup>

      {allReminders.length > 0 ? (
        allReminders.map((reminders) => (
          <Grid container justifyContent="center">
            <List key={reminders.id}>
              <ListItem>
                <ListItemIcon>
                  <Checkbox
                    id={reminders.id}
                    checked={reminders.completed}
                    name={reminders.id}
                    onChange={() => onChecked(reminders.id)}
                  />
                </ListItemIcon>
                <ListItemText primary={reminders.title} secondary={date} />
              </ListItem>
            </List>
          </Grid>
        ))
      ) : (
        <Typography style={{ margin: "10px" }}>No Reminders Yet</Typography>
      )}
    </div>
  );
}

export default CreateReminder;
