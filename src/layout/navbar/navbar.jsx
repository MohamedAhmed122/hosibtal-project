import React, { Fragment } from "react";
import {
  AppBar,
  Toolbar,
  useTheme,
  useMediaQuery,
  makeStyles,
} from "@material-ui/core";
import { ElevationScroll } from "../utils.js/utils";
import NavbarTabs from "./tabs";
import Drawer from "./Drawer";


const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Fragment>
      <ElevationScroll>
        <AppBar className={classes.appBar}>
          <Toolbar>
          
            {match ? <Drawer/> : <NavbarTabs />}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.ToolbarMargin} />
    </Fragment>
  );
};
export default Navbar;











const useStyles = makeStyles((theme) => ({
  ToolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "",
    [theme.breakpoints.down("md")]: {
      marginBottom: "",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "",
    },
  },

  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));
