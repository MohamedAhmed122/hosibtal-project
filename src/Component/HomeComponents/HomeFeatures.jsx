import React, { Fragment } from "react";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import PeopleIcon from "@material-ui/icons/People";
import EcoIcon from "@material-ui/icons/Eco";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const HomeFeatures = () => {
  const features = items;
  const classes = useStyles();
  return (
    <Fragment>
      <div>
        <Typography className={classes.mainTitle} variant="h4">
          Our Features
        </Typography>
      </div>
      <div className={classes.after}></div>
      <Grid
        container
        direction="row"
        justify="space-around"
        style={{ marginTop: "4rem", marginBottom: "12rem" }}
        alignItems="center"
      >
        {features.map((item) => (
          <Grid item key={item.id}>
            <Grid container direction="column">
              <Grid item>
                <div className={classes.infoBackgroung}>
                  <div className={classes.img}>{item.img}</div>
                </div>
              </Grid>
              <Grid item>
                <Typography variant="h6" className={classes.title}>
                  {item.name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" className={classes.sub}>
                  {item.description}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default HomeFeatures;

const useStyles = makeStyles((theme) => ({
  mainTitle: {
    textAlign: "center",
    wordSpacing: 2,
    marginTop: "12rem",
  
  },
  after: {
    display: "block",
    height: "4px",
    width: 100,
    content: " ",
    marginTop: 10,
    backgroundColor: "#ecce76",
    margin: "0 auto",
  },
  img: {
    color: "#1d8794",
    textAlign: "center",
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "7rem",
    },
  },
  infoBackgroung: {
    backgroundImage: ` linear-gradient(rgba(255,194,16,1) 65%, rgba(34,193,195,1) 81%, rgba(45,131,253,1)),url()`,
    height: "4rem",
    width: "4rem",
    borderRadius: "50%",
    marginLeft: "5rem",
  },
  sub: {
    width: "17rem",
    fontSize: "1.3rem",
    fontFamily: "Cormorant Garamond, serif",
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    color: "#1d8794",
    margin: "1.5rem 0 0 0",
  },
}));

const items = [
  {
    name: "Non-GMO Products",
    description:
      "We are a quality centric firm. To offer the best Agro Products to the clients, we only procure them from trusted farmers of the country who practice organic farming.",
    img: <AcUnitIcon fontSize="large" />,
  },
  {
    name: "Natural & Organic",
    description:
      "Our offered Agro Products are : 100% pure, Hygienically processed, Organically cultivated, Unadulterated, Nutritious, Carefully packed.",
    img: <EcoIcon fontSize="large" />,
  },
  {
    name: "Why Choose Us?",
    description:
      "The features that make us unique are : Fair business dealings Team of qualified professionals Organically grown Agro Products Associations with reputed farmers.",
    img: <VerifiedUserIcon fontSize="large" />,
  },
  {
    name: "Trainned Team",
    description:
      "The constant endeavour of our team is to work dedicatedly and sincerely towards delivering the best quality Agro Products to the clients at the most fair prices.",
    img: <PeopleIcon fontSize="large" />,
  },
];
