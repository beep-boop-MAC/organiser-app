import React from 'react';
import { Card, CardContent, Typography, CardActionArea} from '@material-ui/core';

function UnitCard({unit, displayTopic}) {

    return (
        <Card style={{marginTop: "12px"}}>
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
