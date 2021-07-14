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
    padding: "0.7rem",
  },

  textfield2: {
    width: "200px",
    position: "sticky",
    padding: "0.7rem",
  },

  form: {
    position: "sticky",
  },

  button: {
    marginLeft : "13px"
  }
});

function CreateReminder() {
  const classes = reminderStyle();

  const [allReminders, setAllReminders] = useState([]);
  const [reminders, setReminders] = useState({
    title: null,
    due: null,
    completed: false,
  });

  let count = allReminders.length;

  const addSingleReminder = (reminders) => {
    setAllReminders([...allReminders, reminders]);
  };

  const onChecked = (id) => {
    const newReminders = allReminders;

    let toChange = newReminders[id];

    toChange.completed = !toChange.completed;

    newReminders[id] = toChange;

    setAllReminders([...newReminders]);
  };

  return (
    <div>
      <FormGroup className={classes.form}>

        <Grid container>
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
            onChange={(e) =>
              setReminders({
                ...reminders,
                message: e.target.value,
              })
            }
          />
        </Grid>

        <Grid container>
          <Button
            type="submit"
            disableElevation
            variant="contained"
            className={classes.button}
            color="secondary"
            onSubmit={(e) => {
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
              <ListItemText primary={reminders.title} />
            </ListItem>
          </List>
        ))
      ) : (
        <Typography>No Reminders Yet</Typography>
      )}
    </div>
  );
}

export default CreateReminder;
