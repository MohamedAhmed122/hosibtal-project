import React from "react";
import HeroHome from "../../Component/HomeComponents/HomeHero";
import Overview from "../../Component/HomeComponents/HomeOverview";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import HomeText from "../../Component/HomeComponents/HomeText";
import HomeFeatures from "../../Component/HomeComponents/HomeFeatures";

import MainStepper from "../../Component/HomeComponents/Stepper/MainStepper";


const HomePage = () => {
  const classes = useStyles();
  return (
    <div>
      <HeroHome />
      <HomeText />
      <HomeFeatures />
      <Grid container style={{marginBottom: '9rem'}}>
        <Grid item lg={1}></Grid>
        <Grid item lg={10}>
          <Typography variant="h3" style={{marginTop: '2rem', marginBottom:'2rem'}} className={classes.mainText}>
            We Provide Over <span style={{color: '#15888d',fontFamily: 'Pacifico', fontSize: '3rem'}}>20</span> Products
          </Typography>
          <Grid container justify="space-around">
            <Overview />
          </Grid>
        </Grid>
        <Grid item lg={10}></Grid>
      </Grid>
      <MainStepper />
    </div>
  );
};
export default HomePage;

const useStyles = makeStyles((theme) => ({
  mainText: {
    color: "#ecce76",
    fontWeight: 200,
    fontSize: "2rem",
    marginLeft: "2rem",
  },
 
}));
