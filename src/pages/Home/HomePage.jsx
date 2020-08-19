import React from "react";
import HeroHome from "../../Component/HomeComponents/HomeHero";
import Overview from "../../Component/HomeComponents/HomeOverview";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import Icon20 from "../../assets/Icon/icon";

const HomePage = () => {
  const classes = useStyles();
  return (
    <div>
      <HeroHome />
      <Grid container>
        <Grid item lg={1}></Grid>
        <Grid item lg={10}>
          <Typography variant="h3" style={{marginTop: '7rem'}} className={classes.mainText}>
            We Provide Over 
          </Typography>
          <div style={{ margin: "0.1rem" , marginLeft:'4rem'}}><Icon20 /> </div>
          <Typography variant="h3"style={{marginBottom: '3rem'}} className={classes.mainText}>
            Products Herbs, Spices, Seeds and more
          </Typography>
          <Grid container justify="space-around">
            <Overview />
          </Grid>
        </Grid>
        <Grid item lg={10}></Grid>
      </Grid>
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
