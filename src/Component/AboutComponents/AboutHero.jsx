import React from "react";
import { Fragment } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import about from "../../assets/plant.svg";
import EcoIcon from "@material-ui/icons/Eco";

const AboutHero = () => {
  const classes = useStyle();
  return (
    <Fragment>
      <Grid container direction="row" style={{ marginBottom: "5rem" }}>
        <Grid item>
          <Typography className={classes.text} variant="h4">
            Would you Like To know More About us
          </Typography>
          <Typography className={classes.subText} variant="h4">
            Let's get Personal{" "}
          </Typography>
          <div>
            <div style={{marginTop: '1rem', marginLeft: '2rem'}}>
              <EcoIcon style={{ color: "#15888d", marginLeft: "7rem" }} />{" "}
              <EcoIcon style={{ color: "#ecce76" }} />{" "}
              <EcoIcon style={{ color: "#15888d" }} />
            </div>
          </div>
        </Grid>
        <Grid item style={{ textAlign: "right" }}>
          <img className={classes.img} src={about} alt="svg about us" />
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default AboutHero;











const useStyle = makeStyles((theme) => ({
  img: {
    width: "50rem",
    height: "50rem",
    [theme.breakpoints.down("sm")]: {
        width: "20rem",
        height: "20rem",
      },
      [theme.breakpoints.down("md")]: {
        width: "30rem",
        height: "30rem",
        marginLeft: '5rem'
      },
  },
  text: {
    marginTop: "18rem",
    color: "#1d8794",
    marginLeft: "2rem",
    [theme.breakpoints.down("sm")]: {
        marginTop: "3rem",
        marginLeft: "5rem",
        fontSize: '1rem'
      },
      [theme.breakpoints.down("md")]: {
        marginTop: "12rem",
        marginLeft: "1rem",
        fontSize: '1.4rem'
      },
  },
  subText: {
    color: "#1d8794",
    marginLeft: "6rem",
    marginTop: "2rem",
    [theme.breakpoints.down("sm")]: {
      
      },
      [theme.breakpoints.down("md")]: {
        marginLeft: "7rem",
        fontSize: '1.4rem'
      },
  },
}));
