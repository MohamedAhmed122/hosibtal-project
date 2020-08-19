import React, { Fragment, useState } from "react";
import NearMeIcon from "@material-ui/icons/NearMe";
import {
  makeStyles,
  Grid,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

const MainContact = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const HandleChange = (event) => {
    let error;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        error = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        if (!error) {
          setEmailHelper("Invalid Email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        error = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/.test(
          event.target.value
        );
        if (!error) {
          setPhoneHelper("Invalid Phone number");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };
  const handleSubmit = () => {
    setEmail("");
    setMessage("");
    setName("");
    setPhone("");
  };

  return (
    <Fragment>
      <Grid container>
        <Grid item container lg={3}></Grid>
        <Grid item container direction="column" lg={6} justify="center">
          <form onSubmit={handleSubmit}>
            <Grid item>
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <Typography
                    variant="h2"
                    style={{
                      marginTop: "5rem",
                      marginRight: "2rem",
                      color: "#15888d",
                    }}
                  >
                    Contact US
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    style={{
                      color: "#15888d",
                      margin: "1rem",
                      marginBottom: "1rem",
                      marginLeft: "2rem",
                    }}
                  >
                    what're you waiting for?
                  </Typography>
                </Grid>
                <Grid item container>
                  <Grid item className={classes.img}></Grid>
                  <Grid item>
                    <Typography
                      style={{ color: "#15888d", fontSize: "1rem" }}
                      variant="subtitle1"
                    >
                      <a
                        href="tel:+7(913)-113-66-37"
                        style={{ color: "#15888d", textDecoration: "none" }}
                      >
                        +5(555)-555-55-55
                      </a>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item className={classes.img}>
                    {/* <img
                      src={emailIcon}
                      alt="email"
                      style={{ marginRight: "0.5rem", marginTop: "0.5rem" }}
                    /> */}
                  </Grid>
                  <Grid item>
                    <Typography
                      style={{ color: "#15888d", fontSize: "1rem" }}
                      variant="subtitle1"
                    >
                      <a
                        href="mailto:Hello@Hello.com"
                        style={{ color: "#15888d", textDecoration: "none" }}
                      >
                        Hello@Hello.com
                      </a>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item>
                    <TextField
                      id="name"
                      className={classes.text}
                      label="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="email"
                      className={classes.text}
                      error={emailHelper.length !== 0}
                      label="email"
                      value={email}
                      helperText={emailHelper}
                      onChange={(e) => HandleChange(e)}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="phone"
                      className={classes.text}
                      error={phoneHelper.length !== 0}
                      label="phone"
                      value={phone}
                      helperText={phoneHelper}
                      onChange={(e) => HandleChange(e)}
                    />
                  </Grid>
                </Grid>
                <Grid item>
                  <TextField
                    InputProps={{ disableUnderline: true }}
                    id="message"
                    className={classes.msg}
                    multiline
                    rows={10}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </Grid>
                <Grid item>
                  <Button
                    className={classes.send}
                    // onClick={handleClickOpen}
                    onClick={handleSubmit}
                    variant="outlined"
                  >
                    Send Message
                    <NearMeIcon style={{marginLeft: 7}} />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item container lg={3}></Grid>
      </Grid>
    </Fragment>
  );
};
export default MainContact;

const useStyles = makeStyles((theme) => ({
  Background: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "50em",
    width: "100%",
  },
  msg: {
    border: `2px solid #15888d`,
    marginTop: "5rem",
    borderRadius: 10,
    width: 500,

    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  text: {
    width: 500,
    marginTop: "1rem",
    marginLeft: "7rem",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "27em",
      marginLeft: "1rem",
    },
  },
  send: {
    backgroundColor: "#15888d",
    borderColor: "#15888d",
    borderRadius: "120px",
    marginBottom: "4rem",
    borderWidth: 2,
    textTransform: "none",
    color: "white",
    fontSize: "1.2rem",
    fontWeight: 300,
    height: 55,
    marginTop: "3rem",
    width: 225,
    "&:hover": {
        backgroundColor: "white",
        borderColor: "#15888d",
        color:'#15888d'
    },
  },
  img: {
    marginLeft: "16rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "9rem",
    },
  },
}));
// disabled={name.length===0
//     || phone.length===0 || message.length===0
//     || email.length ===0 ||phoneHelper.length!==0
//     ||emailHelper.length!==0}
