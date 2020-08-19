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
                The Factory
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
            la chaîne de montagnes la plus haute d’Europe, la France
            </Typography>
            <Typography variant="subtitle1">
                La région des Alpes est située à l’Est de la France. Les Alpes sont<br/>
                la chaîne de montagnes la plus haute d’Europe,
            </Typography>
            </Grid>
            <Grid item>
            <img className={classes.icon} alt="factory icon" src={factory} />
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
            <Typography variant="subtitle1" className={classes.subtitle}>
            la chaîne de montagnes la plus haute d’Europe, la France
            </Typography>
            <Typography variant="subtitle1">
                La région des Alpes est située à l’Est de la France. Les Alpes sont<br/>
                la chaîne de montagnes la plus haute d’Europe,
            </Typography>
            </Grid>
            <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img className={classes.icon} alt="mobile phone icon" src={Farm} />
            </Grid>
        </Grid>
    </Fragment>
);
};

export default Tech;

const useStyles = makeStyles((theme) => ({
    subtitle: {
        marginBottom: "1em",
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
        marginBottom: '7rem',
        [theme.breakpoints.down("sm")]: {
        padding: 25,
        },
},
}));
