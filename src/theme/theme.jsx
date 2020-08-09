import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0b72B9";
const arcOrange = "#FFBA60";
export default createMuiTheme({
  palette: {
    common: {
      arcBlue: arcBlue,
      arcOrange: arcOrange,
    },
    primary: {
      main: arcOrange,
    },
    secondary: {
      main: arcBlue,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      fontSize: "1rem",
      fontWeight: 600,
      marginLeft: "20px",
      minWidth: 10,
    },
    drawer: {
      fontFamily: "Raleway",
      fontSize: "1rem",
    },
    loginBtn: {
      padding: "0.7rem 2.4rem",
      color: "white",
      backgroundColor: arcBlue,
      "&:hover": {
        backgroundColor: "#4791db",
      },
    },
  },
});
