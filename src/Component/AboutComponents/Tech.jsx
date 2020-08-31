import React, { Fragment } from "react";
import {
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  makeStyles,
} from "@material-ui/core";

import factory from "../../assets/Factory.svg";
import Farm from "../../assets/Farm.svg";
import Goal from "../../assets/goal.svg";

const Tech = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Fragment>
        <Grid
        container
        direction="row"
        justify={matchesSM ? "center" : undefined}
        className={classes.serviceContainer}
        >
        <Grid
            item
            style={{
            marginLeft: matchesSM ? 0 : "5em",
            textAlign: matchesSM ? "center" : undefined,
            }}
        >
            <Typography variant="h4" className={classes.title}>
            Vision & Goals
            </Typography>
            <Typography
            variant="subtitle1"
            className={classes.subtitle}
            paragraph
            >
            Herbstrades company works to supply the best quality of products
            <br /> and strives to be the largest supplier of herbs, spices and
            seeds <br />
            in the Middle East, due to honesty,
            </Typography>
            <Typography
            variant="subtitle1"
            className={classes.subtitle}
            paragraph
            >
            integrity and the quality of our products. the most important to us{" "}
            <br />
            is the service after we sale & the permanent work with our customers
            </Typography>
        </Grid>
        <Grid item>
            <img className={classes.icon} alt="factory icon" src={Goal} />
        </Grid>
        </Grid>
        <Grid
        container
        direction="row"
        justify={matchesSM ? "center" : "flex-end"}
        className={classes.serviceContainer}
        >
        <Grid
            item
            style={{
            textAlign: matchesSM ? "center" : undefined,
            }}
        >
            <Typography variant="h4" className={classes.title}>
            The Farm
            </Typography>
            <Typography
            variant="subtitle1"
            className={classes.subtitle}
            paragraph
            >
            Our farms are located in southern Egypt, specifically in Beni Suef,{" "}
            <br />
            Fayoum and Minya,
            </Typography>
            <Typography
            variant="subtitle1"
            className={classes.subtitle}
            paragraph
            >
            and the reason for this is the quality of the land and agriculture,
            <br />
            and the availability of expertise in these places. Our beginning{" "}
            <br />
            was agriculture, production,
            </Typography>
            <Typography
            variant="subtitle1"
            className={classes.subtitle}
            paragraph
            >
            export and supply to our customers all over the world.
            </Typography>
        </Grid>
        <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img className={classes.icon} alt="mobile phone icon" src={Farm} />
        </Grid>
        </Grid>
        <Grid
        container
        direction="row"
        justify={matchesSM ? "center" : undefined}
        className={classes.serviceContainer}
        >
        <Grid
            item
            style={{
            marginLeft: matchesSM ? 0 : "5em",
            textAlign: matchesSM ? "center" : undefined,
            }}
        >
            <Typography variant="h4" className={classes.title}>
            The Factory
            </Typography>
            <Typography
            variant="subtitle1"
            className={classes.subtitle}
            paragraph
            >
            Our factory is located in the city of Beni Suef with the best <br />
            machines that
            </Typography>
            <Typography
            variant="subtitle1"
            className={classes.subtitle}
            paragraph
            >
            produce the required quality according to the customer's
            <br />
            request anywhere in the world
            </Typography>
        </Grid>
        <Grid item>
            <img className={classes.icon} alt="factory icon" src={factory} />
        </Grid>
        </Grid>
    </Fragment>
  );
};

export default Tech;

const useStyles = makeStyles((theme) => ({
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "1em",
    fontFamily: "Cormorant Garamond, serif",
  },
  icon: {
    marginLeft: "2em",
    height: "20rem",
    width: "20rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  title: {
    marginTop: "5rem",
    marginBottom: "1rem",
    color: "#1d8794",
  },

serviceContainer: {
    marginTop: "12em",
    marginBottom: "7rem",
    [theme.breakpoints.down("sm")]: {
        padding: 25,
    },
  },
}));
