import React from 'react';
import { makeStyles, Card, CardActions, CardContent, Typography, CardActionArea} from '@material-ui/core';

const styles = makeStyles({
    root:{
        width: "350px",
        height: "200px",
        display: "flex",

        
    },

    card: {
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-16.5%, -50%)',
        marginTop: "200px",
        paddingBottom: "50px"
        
    }


})

function UnitCard() {

    const UnitList = [
        {
            unit: 'Math',
            topic: 'calculus',
            grade: 60
        },

        {
            unit: 'Chem',
            topic: 'inorganic chem',
            grade: 60
        },

        {
            unit: 'Bio',
            topic: 'cells',
            grade: 60
        },

        {
            unit: 'Physics',
            topic: 'inertia',
            grade: 60
        },
    ]

    const classes = styles();

    return (
        <div className={classes.card}>
            {UnitList.map(val => (
            <Card className={classes.root}>
                <CardActionArea >
                    <CardContent align="center">
                        <Typography variant="h5">
                            {val.unit}
                        </Typography>
                        <Typography variant="h6" color="secondary">
                            {val.grade}%
                        </Typography>
                        <Typography variant="h6">
                            {val.topic}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            ))}
        </div>
    )
}

export default UnitCard
