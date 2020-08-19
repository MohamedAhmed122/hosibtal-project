import React from "react";
import { Fragment } from "react";
import HerbsListItem from "./HerbsListItem";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import Background from "../../assets/baseBackground.png";

const HerbsList = ({ products }) => {
  const classes = useStyle();
  return (
    <Fragment>
      <Grid
        container
        style={{ height: "45em", marginBottom: "8rem" }}
        alignItems="center"
        direction="row"
        className={classes.infoBackground}
      >
        <Grid item>
          <Typography className={classes.info} variant="h3">
            Herbs Products
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="space-around" style={{ marginBottom: "4rem" }}>
        {products.map((product) => (
          <HerbsListItem key={product.id} product={product} />
        ))}
      </Grid>
    </Fragment>
  );
};
export default HerbsList;









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
