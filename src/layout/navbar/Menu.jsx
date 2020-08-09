import React, { useState } from "react";
import { Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const MenuDropdown = ({ setOpen, setAnchorEl, anchorEl, open }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const menuItems = [
    { name: "Services", link: "/service" },
    { name: "Custom Software ", link: "/" },
    { name: "Mobile App ", link: "/" },
    { name: "Web ", link: "/" },
  ];
  const handleMenuItem = (e, i) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(i);
  };
  return (
    <Menu
      id="simple-menu"
      onClose={() => setOpen(false)}
      anchorEl={anchorEl}
      value={value}
      onChange={(e, newValue) => setValue(newValue)}
      open={open}
      MenuListProps={{ onMouseLeave: () => setOpen(false) }}
      classes={{ paper: classes.menu }}
      elevation={0}
    >
      {menuItems.map((item, i) => (
        <MenuItem
          key={i}
          classes={{ root: classes.menuItem }}
          component={Link}
          to={item.link}
          onClick={(e) => handleMenuItem(e, i)}
          selected={i === selectedIndex}
        >
          {item.name}
        </MenuItem>
      ))}
    </Menu>
  );
};
export default MenuDropdown;
const useStyles = makeStyles((theme) => ({
  menu: {
    ...theme.typography.menu,
    backgroundColor: "#FFBA60",
    color: "white",
  },
  menuItem: {
    fontFamily: "Raleway",
    fontWeight: 400,
    opacity: 0.5,
    "&:hover": {
      opacity: 1.3,
    },
  },
}));
