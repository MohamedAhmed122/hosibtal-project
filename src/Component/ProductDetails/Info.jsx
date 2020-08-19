import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import AssignmentIcon from "@material-ui/icons/Assignment";
import BallotIcon from "@material-ui/icons/Ballot";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import CategoryIcon from "@material-ui/icons/Category";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import DateRangeIcon from "@material-ui/icons/DateRange";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import EcoIcon from "@material-ui/icons/Eco";
import { Typography, Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
const Info = ({ Product }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Typography variant="h4" className={classes.details}>
        Product Details <ArrowDownwardIcon />
      </Typography>
      <List className={classes.main}>
        <ListItem className={classes.list} button>
          <LocalFloristIcon className={classes.icon} />
          <ListItemText
            className={classes.text}
            primary={`Product name is  ${Product.name.toUpperCase()}`}
          />
        </ListItem>

        <ListItem className={classes.list} button>
          <CategoryIcon className={classes.icon} />
          <ListItemText className={classes.text} primary={Product.category} />
        </ListItem>

        <ListItem className={classes.list} button>
          <ColorLensIcon className={classes.icon} />
          <ListItemText
            className={classes.text}
            primary={` The Color is  ${Product.color}`}
          />
        </ListItem>

        <ListItem className={classes.list} button>
          <AddLocationIcon className={classes.icon} />
          <ListItemText
            className={classes.text}
            primary={`Orginally From  ${Product.originOfBasil}`}
          />
        </ListItem>

        <ListItem className={classes.list} button>
          <EcoIcon className={classes.icon} />
          <ListItemText className={classes.text} primary={Product.Type} />
        </ListItem>

        <ListItem className={classes.list} button>
          <DateRangeIcon className={classes.icon} />
          <ListItemText
            className={classes.text}
            primary={`The Harvest: ${Product.harvestSeason}`}
          />
        </ListItem>

        <ListItem className={classes.list} button>
          <BallotIcon className={classes.icon} />
          <ListItemText
            className={classes.text}
            primary={Product.SmellAndTaste}
          />
        </ListItem>
      </List>
      <Typography variant="h4" className={classes.details}>
        More Details <ArrowDownwardIcon />
      </Typography>
      <List style={{ marginBottom: "1rem" }} className={classes.main}>
        <ListItem className={classes.list} button>
          <ZoomInIcon className={classes.icon} />
          <ListItemText className={classes.text} primary={Product.purity} />
        </ListItem>

        <ListItem button className={classes.list}>
          <AllInclusiveIcon className={classes.icon} />
          <ListItemText className={classes.text} primary={Product.Moisture} />
        </ListItem>

        <ListItem button className={classes.list}>
          <BallotIcon className={classes.icon} />
          <ListItemText className={classes.text} primary={Product.Usage} />
        </ListItem>

        <ListItem button className={classes.list}>
          <BusinessCenterIcon className={classes.icon} />
          <ListItemText className={classes.text} primary={Product.feet} />
        </ListItem>

        <ListItem button className={classes.list}>
          <AssignmentIcon className={classes.icon} />
          <ListItemText
            className={classes.text}
            primary={Product.description}
          />
        </ListItem>
      </List>
      <Grid container justify="center" style={{marginBottom:'6rem'}}>
        <Grid item style={{ margin: "1rem" }}>
          <Button className={classes.order} variant="outlined">
            <ArrowBackIcon style={{ marginRight: "0.3rem" }} />
            Go Back
          </Button>
          <Button className={classes.learn} variant="outlined" component={Link} to='/contact'>
            Order Now <ShoppingCartIcon style={{ marginLeft: "0.3rem" }} />
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default Info;

const useStyles = makeStyles((theme) => ({
  main: {},
  icon: {
    textAlign: "center",
    marginLeft: "2rem",
    marginRight: "2rem",
  },
  list: {
    textAlign: "center",
    color: "#70c4bc",
    fontSize: "2rem",
    borderBottom: "0.5px solid #70c4bc ",
  },
  text: {
    color: "#1d8794",
    fontWeight: "bold",
  },
  details: {
    marginLeft: "4rem",
    color: "#ecce76",
    marginTop: "3rem",
  },
  learn: {
    ...theme.typography.learnMoreBtn,
    marginLeft: "1rem",
  },
  order: {
    ...theme.typography.orderBtn,
  },
}));
