import React from "react";
import CreateReminder from "../components/Reminders/CreateReminder";
import {makeStyles} from "@material-ui/styles";
import {Grid, Typography} from "@material-ui/core";

function RemindersPage({onSubmitFunc, allReminders, setAllReminders, onChecked}) {

    return (
        <div>
            <Typography variant="h3" align="center">
                Reminders
            </Typography>
            <Grid justifyContent="center">
                <div align="center" style={{marginTop: "30px"}}>
                    <CreateReminder onChecked={onChecked} onSubmitFunc={onSubmitFunc} allReminders={allReminders}
                                    setAllReminders={setAllReminders}/>
                </div>
            </Grid>
        </div>
    );
}

export default RemindersPage;
