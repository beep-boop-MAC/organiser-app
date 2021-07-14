import {Card, CardContent, Typography} from "@material-ui/core";

const ReminderCard = ({reminder}) => {

    return(
        <Card>
            <CardContent>
                <Typography variant={"h4"}>{reminder.title}</Typography>
                <Typography>Due : {reminder.due}</Typography>
                <Typography>Completed: {reminder.completed ? "Yes": "No"}</Typography>
            </CardContent>
        </Card>
    )
}

export default ReminderCard;