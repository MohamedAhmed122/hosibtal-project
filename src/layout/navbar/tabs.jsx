import React, { useState, Fragment } from "react";
import { Tabs, Tab, makeStyles, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuDropdown from "./Menu";

const NavbarTabs = () => {
  const [value, setValue] = useState(0);
  // const [anchorEl, setAnchorEl] = useState(null);
  // const [open, setOpen] = useState(false);
  const classes = useStyles();
  return (
    <Fragment>
      <Tabs
        style={{ marginLeft: "auto" }}
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
      >
        <Tab
          component={Link}
          to="/"
          label="Hospitals"
          className={classes.tabs}
        />
        <Tab
          label="Labs"
          component={Link}
          to="/labs"
          //   aria-owns={anchorEl ? "simple-menu" : null}
          //   aria-haspopup={anchorEl ? "true" : null}
          //   onMouseOver={(e) => {
          //     setOpen(true);
          //     setAnchorEl(e.currentTarget);
          //   }}
        />
        <Tab
          label="Nurses"
          component={Link}
          to="/nurses"
          className={classes.tabs}
        />
        <Tab
          label="Medicines"
          component={Link}
          to="/medicines"
          className={classes.tabs}
        />
      </Tabs>
      <Button
        variant="contained"
        component={Link}
        to="/login"
        className={classes.btn}
      >
        Login
      </Button>
      {/* <MenuDropdown
        open={open}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        setOpen={setOpen}
      /> */}
    </Fragment>
  );
};
export default NavbarTabs;
const useStyles = makeStyles((theme) => ({
  tab: {
    ...theme.typography.tab,
  },
  btn: {
    ...theme.typography.loginBtn,
    marginLeft: "2rem",
  },
}));
