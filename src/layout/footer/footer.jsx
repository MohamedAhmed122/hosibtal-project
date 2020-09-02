import React from "react";

import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/" className={classes.link}>
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/products"
                className={classes.link}
                style={{ marginLeft: "0.6rem" }}
              >
                Products
              </Grid>
              <Grid
                item
                component={Link}
                style={{ marginLeft: "0.6rem" }}
                to="/herbs"
                className={classes.link}
              >
                Herbs
              </Grid>
              <Grid
                item
                component={Link}
                style={{ marginLeft: "0.6rem" }}
                to="/specialProduct"
                className={classes.link}
              >
                special Products
              </Grid>
              <Grid
                item
                component={Link}
                style={{ marginLeft: "0.6rem" }}
                to="/seeds"
                className={classes.link}
              >
                Seeds
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/about" className={classes.link}>
                About Us
              </Grid>
              <Grid item component={Link} to="/about" className={classes.link}>
                History
              </Grid>
              <Grid item component={Link} to="/about" className={classes.link}>
                The Farm
              </Grid>
              <Grid item component={Link} to="/about" className={classes.link}>
                The Factory
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/contact"
                className={classes.link}
              >
                Contact Us
              </Grid>
              <Grid
                item
                component={Link}
                to="/contact"
                className={classes.link}
              >
                Hello@Hello.com
              </Grid>
              <Grid
                item
                component={Link}
                to="/contact"
                className={classes.link}
              >
                Hello@Hello.com
              </Grid>
              <Grid
                item
                component={Link}
                to="/contact"
                className={classes.link}
              >
                Hello@Hello.com
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          justify="flex-end"
          spacing={2}
          className={classes.socialContainer}
        >
          <Grid
            item
            component={"a"}
            href="https://www.facebook.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img alt="facebook logo" src={facebook} className={classes.icon} />
          </Grid>
          <Grid
            item
            component={"a"}
            href="https://www.twitter.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img alt="twitter logo" src={twitter} className={classes.icon} />
          </Grid>
          <Grid
            item
            component={"a"}
            href="https://www.instagram.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt="instagram logo"
              src={instagram}
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Hidden>
    </footer>
  );
};

export default Footer;

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#ecce76",
    width: "100%",
    zIndex: 1302,
  },

  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "1.1rem",
    fontWeight: 500,
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
    },
  },
}));
