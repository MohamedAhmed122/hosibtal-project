import React, { Fragment } from "react";

import { Grid,  makeStyles } from "@material-ui/core";
import ProductOverview from "../../Component/ProductOverview/ProductOverview";

const ProductPage = () => {
  const classes = useStyle();

  return (
    <Fragment>
      <Grid container justify="space-around">
        <ProductOverview />
      </Grid>
    </Fragment>
  );
};
export default ProductPage;

const useStyle = makeStyles((theme) => ({}));
