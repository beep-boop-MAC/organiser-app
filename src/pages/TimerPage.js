import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import NavBar from '../components/NavBarComponents/NavBar';
import Pomodoro from '../components/Timer/Pomodoro';

const timerStyle = makeStyles((theme) => ({
    
    toolbar: theme.mixins.toolbar,

    content: {
        flexGrow: "1",
        backgroundColor: "theme.palette.background.default",
        padding: "theme.spacing(3)",
    },

}))


function TimerPage() {

    const classes = timerStyle();

    return (
        <div style={{display: "flex"}}>
            <div className={classes.toolbar}/>
                <NavBar/>
                <Pomodoro/>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                        <Typography 
                        variant='h3' 
                        align="center"
                        >
                            Study Timer
                        </Typography>
                </main>
        </div>

    )
}

export default TimerPage
