import React, { Fragment } from "react";
import { Grid, makeStyles, Typography, Button } from "@material-ui/core";

import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import herbs from "../../assets/herbs.png";
const Overview = () => {
  const classes = useStyle();
  return (
    <Fragment>
      <Grid
        container
        style={{
          height: "30em",
          marginBottom: "8rem",
          backgroundImage: `url(${herbs})`,
        }}
        alignItems="center"
        direction="column"
        className={classes.infoBackground}
      >
        <Grid item>
          <Typography variant="h4" className={classes.mainHerbs}>
            Make Mealtimes Herbalicious
          </Typography>
          <Typography className={classes.subHerbs} variant="subtitle1">
            <FormatQuoteIcon style={{ transform: "scaleX(-1)" }} />
            Fresh herbs can turn the simplest meal tinto something <br />
            exciting and special, Providing that extra character that bring
            other ingredients <br />
            into balance. <br />
            They add flavour, aroma, texture and colour to your culinary
            creations
            <FormatQuoteIcon />
          </Typography>
          <Button variant="outlined" className={classes.btn}>
            Take a Tour <ArrowForwardIcon style={{ marginLeft: "0.3rem" }} />
          </Button>
        </Grid>
      </Grid>
      {/* -----------                     Spices                    ---------*/}
      <Grid
        container
        style={{
          height: "30em",
          marginBottom: "8rem",
          backgroundImage: `url()`,
          
        }}
        alignItems="center"
        direction="column"
        className={classes.infoBackground}
      >
        <Grid item>
          <Typography variant="h4" className={classes.mainHerbs}>
            Make Mealtimes Herbalicious
          </Typography>
          <Typography className={classes.subHerbs} variant="subtitle1">
            <FormatQuoteIcon style={{ transform: "scaleX(-1)" }} />
            Fresh herbs can turn the simplest meal tinto something <br />
            exciting and special, Providing that extra character that bring
            other ingredients <br />
            into balance. <br />
            They add flavour, aroma, texture and colour to your culinary
            creations
            <FormatQuoteIcon />
          </Typography>
          <Button variant="outlined" className={classes.btn}>
            Take a Tour <ArrowForwardIcon style={{ marginLeft: "0.3rem" }} />
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default Overview;

const useStyle = makeStyles((theme) => ({
  infoBackground: {
    ...theme.typography.backCategory,
  },
  mainHerbs: {
    ...theme.typography.mainTitle,
    marginRight: "55rem",
    marginTop: "5rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
      marginRight: "40rem",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      marginRight: "5rem",
    },
  },
  subHerbs: {
    ...theme.typography.sub,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      marginRight: "1rem",
    },
  },
  btn: {
    ...theme.typography.contactBtn,
  },
}));
