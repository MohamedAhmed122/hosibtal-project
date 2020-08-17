import React from "react";
import { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import {
  makeStyles,
  Typography,
  Button,
  Card,
  CardContent,
} from "@material-ui/core";
import image from "../../assets/1.png";


const ProductOverview = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Typography variant="h2">The Products</Typography>
      <Grid container item>
        <Grid container style={{height:'30rem', width: '20rem'}} className={classes.background} direction="row">
          <Grid item>
            
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default ProductOverview;

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
}));
