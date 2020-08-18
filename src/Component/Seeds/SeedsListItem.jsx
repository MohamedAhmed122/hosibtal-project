import React from "react";
import { Fragment } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";

import CategoryIcon from '@material-ui/icons/Category';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ExploreIcon from '@material-ui/icons/Explore';
import { Link } from "react-router-dom";
const SeedsListItem = ({ product }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item>
        <Card className={classes.subCard}>
          <CardContent>
            <Grid container>
              <Grid item>
                <img src={product.photo} className={classes.img} alt=" The product " />
                <Grid item style={{ textAlign: "center" }}>
                  <Typography variant="h6" style={{ color: "#1d8794" }}>
                  <ShoppingBasketIcon style={{ marginRight: "0.3rem" }} /> {product.name}
                  </Typography>
                  <Typography variant="h6" style={{ color: "#1d8794"}}>
                  <CategoryIcon style={{ marginRight: "0.3rem",color: '#ecce76' }}  />  {product.category}
                  </Typography>
                  <Typography variant="h6" style={{ color: "#1d8794"}}>
                  <ExploreIcon style={{ marginRight: "0.3rem", color: '#ecce76' }}  /> Originally From {product.originOfBasil}
                  </Typography>
                </Grid>
                <Grid item style={{ margin: "1rem" }}>
                  <Button className={classes.order} variant="outlined" component={Link} to={`/seeds/${product.id}`}>
                    Learn Now{" "}
                    <ArrowForwardIcon style={{ marginLeft: "0.3rem" }} />
                  </Button>
                  <Button className={classes.learn} variant="outlined">
                    Order Now{" "}
                    <ShoppingCartIcon style={{ marginLeft: "0.3rem" }} />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Fragment>
  );
};
export default SeedsListItem;









const useStyles = makeStyles((theme) => ({
  learn: {
    ...theme.typography.learnMoreBtn,
    marginLeft: "1rem",
  },
  order: {
    ...theme.typography.orderBtn,
  },
  img: {
    marginLeft: "rem",
    height: "300px",
    width: "350px",
    filter: " brightness(70%)",
    "&:hover": {
      filter: " brightness(100%)",
    },
  },
  subCard: {
    marginBottom: "4rem",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    borderTopStyle: "solid",
    borderBottomStyle: "solid",
    borderWidth: "5px",
    borderColor: "#1d8794",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "3rem",
    },

    "&:hover": {
      boxShadow: theme.shadows[4],
      borderWidth: "8px",
      borderBottomStyle: "solid",
    },
  },
}));
