import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#15888d";
const arcGreen = "#1d8794";
const arcOrange = "#ecce76";
export default createMuiTheme({
  palette: {
    common: {
      arcBlue: arcBlue,
      arcOrange: arcOrange,
      arcGreen: arcGreen,
    },
    primary: {
      main: arcOrange,
    },
    secondary: {
      main: arcBlue,
    },
  },
  typography: {
    orderBtn: {
      backgroundColor: "white",
      borderColor: arcBlue,
      borderWidth: 2,
      textTransform: "none",
      color: arcBlue,
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontSize: "0.9rem",
      height: 45,
      width: 145,
      "&:hover": {
        borderColor: arcGreen,
        backgroundColor: "white",
      },
    },
    learnMoreBtn: {
      backgroundColor: arcOrange,
      borderColor: 'white',
      borderWidth: 2,
      textTransform: "none",
      color: 'white',
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontSize: "0.9rem",
      height: 45,
      width: 145,
      "&:hover": {
        backgroundColor: arcOrange,
        borderColor: 'white',
      },
    },
    h6: {
      fontSize: "1.5rem",
    },
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
      backgroundColor: arcGreen,
      "&:hover": {
        backgroundColor: arcBlue,
      },
    },
  },
});
