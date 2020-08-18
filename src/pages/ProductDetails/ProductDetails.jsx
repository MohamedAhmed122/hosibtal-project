import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";

const ProductDetail = () => {
  return (
    <Fragment>
      <Grid container>
        <Grid item lg={2}></Grid>
        <Grid item lg={8}>
          <h1>hello, there</h1>
        </Grid>
        <Grid item lg={2}></Grid>
      </Grid>
    </Fragment>
  );
};
export default ProductDetail;
