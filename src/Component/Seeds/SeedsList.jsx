import React from "react";
import { Fragment } from "react";
import SeedsListItem from "./SeedsListItem";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import Background from "../../assets/baseBackground.png";

const SeedsList = ({ products }) => {
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
          <span style={{color: '#15888d',fontFamily: 'Pacifico', fontSize: '5rem'}}>8</span> Seeds Products
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="space-around" style={{ marginBottom: "4rem" }}>
        {products.map((product) => (
          <SeedsListItem key={product.id} product={product} />
        ))}
      </Grid>
    </Fragment>
  );
};
export default SeedsList;




















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
    subCard: {
      marginBottom: "4rem",
      boxShadow: theme.shadows[10],
      borderRadius: 15,
      borderTopStyle: "solid",
      borderBottomStyle: "solid",
      borderWidth: "5px",
      borderColor: "#1d8794",
  
      [theme.breakpoints.down("sm")]: {
        marginBottom: "3rem",
      },
  
      "&:hover": {
        boxShadow: theme.shadows[4],
        borderWidth: "8px",
        borderBottomStyle: "solid",
      },
    },
  }));
  