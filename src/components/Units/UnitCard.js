import React from 'react';
import {makeStyles, Card, CardContent, Typography, CardActionArea} from '@material-ui/core';

/*
const styles = makeStyles({
    root:{
        width: "100%",
        height: "200px",
        display: "flex",
        align: "center"
        
    },

})
*/

function UnitCard({unit, displayTopic}) {

    // const classes = styles();

    return (
        <Card>
            <CardActionArea>
                <CardContent align="center">
                    <Typography variant="h5">
                        {unit.unit}
                    </Typography>
                    <Typography variant="h6" color="secondary">
                        {unit.grade}%
                    </Typography>
                    {
                        displayTopic &&
                        <Typography variant="h6">
                            {unit.topic}
                        </Typography>
                    }
                </CardContent>
            </CardActionArea>
        </Card>
    )

}

export default UnitCard
