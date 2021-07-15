import {useState} from "react";
import {Button, FormControl, Grid, makeStyles, TextField} from "@material-ui/core";

const styles = makeStyles({
    textfield1: {
        width: "50%",
        position: "sticky",
        padding: "0.7rem",
    },

    textfield2: {
        width: "200px",
        position: "sticky",
        padding: "0.7rem",
    },

    form: {
        position: "sticky",
    },

    button: {
        padding: 15,
    }
});

const CreateUnit = ({setAllUnits, allUnits}) => {
    let count = allUnits.length;
    const [unit, setUnit] = useState({
        id: null,
        unit:"",
        topic: "",
        grade: 0,
    })

    const classes = styles();

    return(
        <FormControl className={classes.form}>
            <Grid container spacing={2}>
                <Grid item>
                    <TextField placeholder={"Enter unit title"}
                               required
                               onChange={(e) => (setUnit(prevState => ({
                                   ...prevState,
                                   unit: e.target.value
                               })))}
                               variant={"outlined"} />
                </Grid>
                <Grid item>
                    <TextField
                        placeholder={"Enter unit topic"}
                        required
                        onChange={(e) => (setUnit(prevState => ({
                            ...prevState,
                            topic: e.target.value
                        })))}
                        variant={"outlined"} />
                </Grid>
                <Grid item>
                    <TextField
                        placeholder={"Enter unit grade"}
                        required
                        onChange={(e) => (setUnit(prevState => {
                            return ({
                                ...prevState,
                                grade: e.target.value
                            })
                        }))}
                        variant={"outlined"} />
                </Grid>
                <Grid item>
                    <Button color={"secondary"}
                            type={"submit"}
                            className={classes.button}
                            disableElevation
                            onClick={(e) => {
                                e.preventDefault();
                                setAllUnits({
                                    ...unit,
                                    id: count++
                                })
                            }}
                            variant={"contained"}>Add Unit</Button>
                </Grid>
            </Grid>
        </FormControl>
    )
}

export default CreateUnit;