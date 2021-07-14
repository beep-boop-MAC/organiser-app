import { Typography } from "@material-ui/core";
import React from "react";
import UnitCard from "../components/Units/UnitCard";

function UnitsPage() {
  return (
    <div>
      <Typography variant="h3" align="center">
        Units
      </Typography>
      <div>
        <UnitCard />
      </div>
    </div>
  );
}

export default UnitsPage;
