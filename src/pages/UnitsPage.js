import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import NavBar from '../components/NavBarComponents/NavBar';
import UnitCard from '../components/Units/UnitCard';

const unitStyle = makeStyles((theme) => ({
    
    toolbar: theme.mixins.toolbar,

    content: {
        flexGrow: "1",
        backgroundColor: "theme.palette.background.default",
        padding: "theme.spacing(3)",
    },

}))

function UnitsPage() {

    const classes = unitStyle()
    return (
        <div style={{display: "flex"}}>
            <div className={classes.toolbar}/>
                <NavBar/>
                <UnitCard/>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                        <Typography 
                        variant='h3' 
                        align="center"
                        >
                            Units
                        </Typography>
                </main>
        </div>
    )
}

export default UnitsPage
