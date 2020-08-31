import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import HerbsStepper from "./HerbsStepper";
import SpicesStepper from "./SpicesStepper";
import SeedsStepper from "./SeedsStepper";

const MainStepper = () => {
  return (
    <Fragment>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
            <HerbsStepper />
        </Grid>
        <Grid item>
            <SpicesStepper/>
        </Grid>
        <Grid item>
            <SeedsStepper />
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default MainStepper;