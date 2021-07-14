import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Button, ButtonGroup } from '@material-ui/core';

const style = makeStyles({    
    text: {
        fontSize: "80px",
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)',

    },

    box:{
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(2%, -50%)',
        borderColor:"#189AB4",
        borderRadius: "10px",
        padding: "1rem",
        borderBlockEndWidth: "6px",
        borderBlockStartWidth: "6px",
        borderInlineEndWidth: "6px",
        borderInlineStartWidth: "6px",
        height: "80px",
        width: "200px",
        justifyContent: "center"
    },

    button: {
        position: 'fixed', 
        left: '50%', 
        top: '65%',
        transform: 'translate(8%, -50%)',
        width: "220px",
        
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

    const restart = () => {
        setMinute(25);
        
    }

    return (
        <div className={classes.root} >
            <Box border={1} className="timer" className={classes.box}>
                <div className={classes.text} >{timerMinute}:{timerSecond}</div>
            </Box>

            <ButtonGroup disableElevation variant="contained" color="secondary" size="large" className={classes.button}>
                <Button onClick={() => setOn(true)}>Start</Button>
                <Button onClick={() => restart()}>Restart</Button>
            </ButtonGroup>
        </div>
    )
}

export default Pomodoro