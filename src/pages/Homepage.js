import {Grid, Typography} from '@material-ui/core'
import React from 'react'
import ReminderCard from "../components/Reminders/ReminderCard";
import UnitCard from "../components/Units/UnitCard";

function Homepage({allReminders, allUnits}) {
    return (
        <div>
            <Typography
                variant="h3"
                align="center"
            >
                Home
            </Typography>
            <div>
                <Typography variant={"h4"}>
                    Reminders
                </Typography>
                {
                    allReminders.length > 0 ?
                        (<Grid 
                        container spacing={3}
                        
                        >
                            {allReminders.map((reminder) => (
                                <Grid item xs={3}
                                style={{marginTop: "10px"}}
                                >
                                    <ReminderCard reminder={reminder}/>
                                </Grid>
                            ))}
                        </Grid>)
                        :
                        <Typography>
                            No Reminders to Display
                        </Typography>
                }
            </div>
            <div>
                <Typography variant={"h4"} style={{paddingTop: "15px"}}>
                    Units
                </Typography>
                {
                    allUnits.length > 0 ?
                        <Grid 
                        container spacing={3}
                        >
                            {
                                allUnits.map(unit => (
                                    <Grid 
                                    item xs={6}
                                    style={{marginTop: "10px"}}
                                    >
                                        <UnitCard unit={unit}/>
                                    </Grid>
                                ))
                            }
                        </Grid>

                        :
                        <Typography>No Units yet</Typography>
                }
            </div>
        </div>
    )
}

export default Homepage
