import React from 'react';
import { makeStyles, Card, CardContent, Typography, CardActionArea} from '@material-ui/core';

const styles = makeStyles({
    root:{
        width: "100%",
        height: "200px",
        display: "flex",
        align: "center"
        
    },

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
