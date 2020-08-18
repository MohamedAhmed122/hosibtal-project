import React, { Fragment } from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

import product from "../../assets/other.png";
import spices from "../../assets/Spices.png";
import herbs from "../../assets/herbs.png";
import seeds from "../../assets/seeds.png";
import { Link } from "react-router-dom";

const ProductOverview = () => {
  const classes = useStyle();
  const MenusItem = Menu;
  return (
    <Fragment>
      {MenusItem.map((item) => (
        <Grid item key={item.id}>
          <Grid
            container
            style={{
              marginBottom: "4rem",
              backgroundImage: `url(${item.image})`,
            }}
            alignItems="center"
            direction="row"
            className={classes.infoBackground}
            component={Link}
            to={item.link}
          >
            <Grid className={classes.card}>
              <Typography variant="h6">{item.title.toUpperCase()}</Typography>
              <Typography variant="subtitle1">SHOP NOW</Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Fragment>
  );
};
export default ProductOverview;

const useStyle = makeStyles((theme) => ({
  infoBackground: {
    textDecoration: "none",
    color: "black",
    ...theme.typography.background,
    [theme.breakpoints.down("sm")]: {
      width: "15rem",
      height: "15rem",
      margin: 0,
    },
    [theme.breakpoints.down("md")]: {
      width: "20rem",
      height: "20rem",
      margin: 0,
    },
  },

  card: {
    ...theme.typography.card,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },
}));
const Menu = [
  {
    image: herbs,
    title: "Herbs",
    id: 1,
    link: "/herbs",
  },
  {
    image: seeds,
    title: "Seeds",
    id: 2,
    link: "/seeds",
  },
  {
    image: spices,
    title: "Spices",
    id: 3,
    link: "/spices",
  },
  {
    image: product,
    title: "Specials",
    id: 1,
    link: "/specialProduct",
  },
];
