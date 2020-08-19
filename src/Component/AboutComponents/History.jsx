import React, { Fragment } from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import history from "../../assets/history.svg";
const History = () => {
  const classes = useStyles();
  return (
    <Fragment>
        <Grid container item>
            <Typography variant="h2" className={classes.aboutTitle}>
            History
            </Typography>
        </Grid>
        <Grid container>
            <Grid item className={classes.historyGrid}>
            <Typography variant="h5" style={{ color: "#ecce76" }}>
                We’re the old father on the block.
            </Typography>
            <Typography variant="subtitle1" paragraph>
                Je m'appelle Angélica Summer, j'ai 12 ans et je suis canadienne. Il
                y a 5 ans, ma famille et moi avons déménagé dans
            </Typography>
            <Typography variant="subtitle1" paragraph>
                Je m'appelle Angélica Summer, j'ai 12 ans et je suis canadienne. Il
                y a 5 ans, ma famille et moi avons déménagé dans
            </Typography>
            <Typography variant="subtitle1" paragraph>
                Je m'appelle Angélica Summer, j'ai 12 ans et je suis canadienne. Il
                y a 5 ans, ma famille et moi avons déménagé dans le sud de la
                France. Mon père, Frank Summer, est mécanicien ; il adore les
                voitures anciennes et collectionne les voitures miniatures.
            </Typography>
            </Grid>
            <Grid item>
            <img className={classes.historyImg} src={history} alt="history" />
            </Grid>
        </Grid>
    </Fragment>
  );
};
export default History;

const useStyles = makeStyles((theme) => ({
  historyGrid: {
    width: "50rem",
    marginLeft: "2rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "2rem",
      width: "30rem",
    },
  },
  historyImg: {
    height: "20rem",
    marginLeft: "2rem",
    width: "30rem",
    [theme.breakpoints.down("sm")]: {
      width: "25rem",
      marginBottom: "10rem",
    },
  },
  aboutTitle: {
    marginLeft: "4rem",
    color: "#1d8794",
    margin: "1rem",
  },
}));
