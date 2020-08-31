import React from "react";
import Egy from "../../assets/Egy.png";
import {
  Grid,
  Typography,
  makeStyles,
  Container,
  Hidden,
} from "@material-ui/core";

const HomeText = () => {
  const classes = useStyles();
  return (
    <Grid container style={{ marginTop: "14rem" }}>
      <Grid item>
        <Container>
          <Typography variant="h4" className={classes.title}>
            Welcome to Herbs Trades Company{" "}
          </Typography>

          <Typography variant="subtitle1" className={classes.sub}>
            We are The farmer and The factory located in Egypt, and of course it
            is known that Egypt has the best quality of herbs, spices and seeds,
            and that is due to the Pharaonic civilization that has been
            cultivating these products for thousands of years,
          </Typography>
          <Hidden mdDown>
          <Typography variant="subtitle1" className={classes.sub}>
            along with Egypt's moderate weather, which makes the plant keep
            inside the proportions of oils and materials extracted from it
            besides the availability of skilled labor in dealing with
            cultivation and production and the packaging of these products,
            dealing with the cultivation of these products requires special
            treatment with them from the first cultivation, drying, packing,
            storing, then shipping to the customer.
          </Typography>
          
            <Typography variant="subtitle1" className={classes.sub}>
              All these stages require very intense experience and accuracy and
              this is what distinguishes us from others in Egypt in general and
              in Herbs Trades in particular.all our products 99.9% pure .
            </Typography>
          </Hidden>
        </Container>
      </Grid>
      <Grid item>
          <Container>
          <img src={Egy} className={classes.img} alt="Egypt" />
          </Container>
        
      </Grid>
    </Grid>
  );
};

export default HomeText;

const useStyles = makeStyles((theme) => ({
  sub: {
    fontSize: "1.2rem",
    
    marginBottom: "1em",
    fontFamily: "Cormorant Garamond, serif",
    width: "40rem",
    [theme.breakpoints.down("md")]: {
        width: "25rem",
        marginLeft: '3rem',
    },
},
title: {
    marginLeft: '3rem',
    color: "#ecce76",
    fontSize: "1.5rem",
    margin: "1rem 1rem 1rem 0",
},
img:{
     marginLeft: '3rem',
     boxShadow: theme.shadows[4],
     borderRadius: 7,
     [theme.breakpoints.down("md")]: {
        width: "25rem",
    },
}
}));
