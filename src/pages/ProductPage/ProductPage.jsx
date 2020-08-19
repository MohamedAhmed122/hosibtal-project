import React, { Fragment } from "react";

import { Grid, makeStyles, Typography } from "@material-ui/core";
import ProductOverview from "../../Component/ProductOverview/ProductOverview";
import Background from "../../assets/baseBackground.png";

const ProductPage = () => {
  const classes = useStyle();

  return (
    <Fragment>
      <Grid
        container
        style={{ height: "45em", marginBottom: "12rem" }}
        alignItems="center"
        direction="row"
        className={classes.infoBackground}
      >
        <Grid item>
          <Typography className={classes.info} variant="h3">
            Our Products
          </Typography>
        </Grid>
      </Grid>
      <ProductOverview />
    </Fragment>
  );
};
export default ProductPage;

const useStyle = makeStyles((theme) => ({
  infoBackground: {
    backgroundImage: ` linear-gradient( rgba(0, 01, 0, 0.8), rgba(0, 0, 0, 0.8) ),url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  info: {
    textAlign: "center",
    marginLeft: "34rem",
    color: "#ecce76",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "7rem",
    },
  },
}));
