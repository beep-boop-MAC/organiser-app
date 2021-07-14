import React from "react";
import CreateReminder from "../components/Reminders/CreateReminder";
import { makeStyles } from "@material-ui/styles";
import NavBar from "../components/NavBarComponents/NavBar";
import { Typography } from "@material-ui/core";


const reminderStyle = makeStyles((theme) => ({
    
    toolbar: theme.mixins.toolbar,

    content: {
        flexGrow: "1",
        backgroundColor: "theme.palette.background.default",
        padding: "theme.spacing(3)",
    },

}))

function RemindersPage() {

    const classes = reminderStyle();

    return (
        <div style={{ display: "flex" }}>
            <div className={classes.toolbar}  />
                <NavBar />
                <CreateReminder />
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                        <Typography 
                        variant="h3" 
                        align="center">
                            Reminders
                        </Typography>
                </main>
        </div>
  );
}

export default RemindersPage;
