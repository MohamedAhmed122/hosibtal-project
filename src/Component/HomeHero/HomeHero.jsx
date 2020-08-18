import React from "react";
import { Fragment } from "react";
import { Grid, makeStyles, Typography, Button } from "@material-ui/core";
import hero from "../../assets/hero.png";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import TelegramIcon from "@material-ui/icons/Telegram";
const HeroHome = () => {
  const classes = useStyle();
  return (
    <Fragment>
      <Grid
        container
        style={{ height: "45em", marginBottom: "8rem" }}
        alignItems="center"
        direction="column"
        className={classes.infoBackground}
      >
        <Grid item className={classes.grid} style={{ marginTop: "10rem" }}>
          <Typography variant="h2">Finding The </Typography>
          <Typography variant="h2">difference with </Typography>
          <Typography style={{ color: "#15888d" }} variant="h2">
            Herbs Trades
          </Typography>
        </Grid>
        <Grid item className={classes.grid}>
          <Grid container direction="row">
            <Grid item>
              <Button className={classes.contactBtn} variant="outlined">
                Take a Tour <ArrowForwardIcon />
              </Button>
              <Button className={classes.tourBtn} variant="outlined">
                Contact Us <TelegramIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default HeroHome;











const useStyle = makeStyles((theme) => ({
  tourBtn: {
    backgroundColor: "#15888d",
    borderColor: "#15888d",
    borderWidth: 2,
    textTransform: "none",
    color: "white",
    fontSize: "1.2rem",
    fontFamily: "Roboto",
    fontWeight: "bold",
    height: 55,
    marginTop: "3rem",
    width: 175,
    "&:hover": {
      borderColor: "#15888d",
      backgroundColor: "white",
      color: "#15888d",
    },
  },
  contactBtn: {
    backgroundColor: "#ecce76",
    borderColor: "#ecce76",
    borderWidth: 2,
    textTransform: "none",
    marginTop: "3rem",
    marginRight: "2rem",
    color: "white",
    fontSize: "1.2rem",
    fontFamily: "Roboto",
    fontWeight: "bold",
    height: 55,
    width: 175,
    "&:hover": {
      borderColor: "#ecce76",
      color: "#ecce76",
      backgroundColor: "white",
    },
  },
  infoBackground: {
    backgroundImage: ` url(${hero})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  grid: {
    marginRight: "auto",
    marginLeft: "10rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "7rem",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "1rem",
    },
  },
  btns: {
    marginRight: "47rem",
    marginTop: "3rem",
    marginBottom: "3rem",
  },
}));
