import { Grid, Typography } from "@material-ui/core";
import React from "react";
import UnitCard from "../components/Units/UnitCard";
import CreateUnit from "../components/Units/CreateUnit";

function UnitsPage({ allUnits, setAllUnits }) {
  return (
    <div>
      <Typography variant="h3" align="center">
        Units
      </Typography>
      <Typography variant="h6" style={{ marginBottom: "10px" }} align="center">
        Create Unit
      </Typography>
      <Grid container justifyContent="center" alignContent="center">
        <CreateUnit setAllUnits={setAllUnits} allUnits={allUnits} />
      </Grid>
      <Grid container spacing={1}>
        {allUnits.map((unit) => (
          <Grid item xs={6}>
            <UnitCard displayTopic={true} unit={unit} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default UnitsPage;
