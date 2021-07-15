import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Button, ButtonGroup } from '@material-ui/core';

const style = makeStyles({    

    box:{
        borderColor:"#189AB4",
        borderRadius: "10px",
        padding: "1rem",
        borderBlockEndWidth: "6px",
        borderBlockStartWidth: "6px",
        borderInlineEndWidth: "6px",
        borderInlineStartWidth: "6px",
        height: "100%",
        width: "200px",
        fontSize: "80px",
        marginTop: "10%",

    },


    button: {
        position: 'sticky', 
        width: "220px",
        padding: "2rem"
        
    }
})

function Pomodoro() {
    const classes = style()

    const [minute, setMinute] = useState(25);
    const [second, setSecond] = useState(0);
    const [timeVar, setTimeVar] = useState(false);
    const [on, setOn] = useState(false)

    useEffect(() => {

        if (on) {
            let interval = setInterval(() => {
                clearInterval(interval);

                if (second === 0 && minute !== 0){
                    setSecond(59);
                    setMinute(minute - 1);
                } else if (second === 0 && minute === 0){

                    let minute = timeVar ? 24 : 4;
                    let second = 59;

                    setSecond(second);
                    setMinute(minute);
                    setTimeVar(!timeVar);
                } else {
                    setSecond(second - 1);
                }

            }, 1000)
        } 
        
        }, [on,second]);

    const timerMinute = minute < 10 ? `0${minute}` : minute;
    const timerSecond = second < 10 ? `0${second}` : second;

    // const setTimerMinute = (time) => {
    //     const timerMinute = minute < 10 ? `0${minute}` : minute;
    //     setMinute(timerMinute);
    // }
    
    // const setTimerSecond = (time) => {
    //     const timerSecond = second < 10 ? `0${second}` : second;
    //     setSecond(timerSecond);
    // }

    const restart = () => {
        setMinute(25);
        setSecond(0);
    }

    return (
        <div >
            <Box border={1} 
            className="timer" 
            className={classes.box}
            >
                {timerMinute}:{timerSecond}
            </Box>

            <ButtonGroup disableElevation variant="contained" color="secondary" size="large" className={classes.button}>
                <Button onClick={() => setOn(true)}>Start</Button>
                <Button onClick={() => restart()}>Restart</Button>
            </ButtonGroup>
        </div>
    )
}

export default Pomodoro