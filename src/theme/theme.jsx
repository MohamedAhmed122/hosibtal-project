import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#15888d";
const arcGreen = "#1d8794";
const arcOrange = "#ecce76";
const arcGrey='#868686'
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
    subtitle1:{
      fontSize: "1rem",
      fontWeight: 200,
      color: arcGrey
    },
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
    backCategory: {
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100%",
      "&:hover": {
        boxShadow: '2px 2px 4px 2px #15888d',
      },
    },
    contactBtn: {
      backgroundColor: "#15888d",
      borderColor: "#15888d",
      borderWidth: 2,
      textTransform: "none",
      color: "white",
      fontSize: "1.2rem",
      fontFamily: "Roboto",
      fontWeight: "bold",
      height: 55,
      marginTop: "1rem",
      width: 175,
      "&:hover": {
        borderColor: "#15888d",
        backgroundColor: "white",
        color: "#15888d",
      },
    },
    background: {
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "35rem",
      height: "20rem",
      cursor: "pointer",
      borderRadius: "2rem",
      filter: " brightness(85%)",
      overflow: "hidden",
      display: "flex",
      "&:hover": {
        transform: "scale(1.02)",
        transition: "transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)",
      },
    },
    mainTitle: {
      fontSize: "3rem",
      color: arcGreen,
      fontFamily: "Oswald, sans-serif",
      fontWeight: 400,
      marginBottom: "1.3rem",
      filter: " brightness(100%)",
      marginTop: "4rem",
    },
    sub: {
      fontSize: "1.4rem",
      color: "white",
      fontFamily: "Oswald, sans-serif",
      fontWeight: 200,
      marginBottom: "1.3rem",
      filter: " brightness(100%)",
    },
    card: {
      height: "110px",
      padding: "0 20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      left: "35%",
      textAlign: "center",
      border: "1px solid black",
      backgroundColor: "white",
      opacity: 0.5,
      position: "relative",
      "&:hover": {
        opacity: 0.7,
      },
    },
    learnMoreBtn: {
      backgroundColor: arcOrange,
      borderColor: "white",
      borderWidth: 2,
      textTransform: "none",
      color: "white",
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontSize: "0.9rem",
      height: 45,
      width: 145,
      "&:hover": {
        backgroundColor: arcOrange,
        borderColor: "white",
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
  overrides: {
    MuiInputLabel: {
      root: {
        color: arcBlue,
        fontSize: "1rem"
      }
    },
    MuiInput: {
      root: {
        color: arcGrey,
        fontWeight: 300
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${arcBlue}`
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${arcBlue}`
        }
      }
    }
  }
});
