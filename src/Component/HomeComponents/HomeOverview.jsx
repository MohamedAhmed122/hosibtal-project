// import React, { Fragment } from "react";
// import { Grid, makeStyles, Typography, Button } from "@material-ui/core";

// import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
// import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
// import herbs from "../../assets/herbs1.png";
// import spicesBackground from "../../assets/Spices2.png";
// import seeds from "../../assets/seeds2.png";
// import special from "../../assets/other2.png";



// const Overview = () => {
//   const classes = useStyle();
//   return (
//     <Fragment>
//       <Grid
//         container
//         style={{
//           height: "450px",
//           marginBottom: "2rem",
//           backgroundImage: ` linear-gradient( rgba(0, 01, 0, 0.6), rgba(0, 0, 0, 0.5) ),url(${herbs})`,
//         }}
//         alignItems="center"
//         direction="column"
//         className={classes.infoBackground}
//       >
//         <Grid item>
//           <Typography variant="h4" className={classes.mainHerbs}>
//             Make Mealtimes Herbalicious
//           </Typography>
//           <Typography className={classes.subHerbs} variant="subtitle1">
//             <FormatQuoteIcon style={{ transform: "scaleX(-1)" }} />
//             Fresh herbs can turn the simplest meal tinto something <br />
//             exciting and special, Providing that extra character that bring
//             other ingredients <br />
//             into balance. <br />
//             They add flavour, aroma, texture and colour to your culinary
//             creations
//             <FormatQuoteIcon />
//           </Typography>
//           <Button variant="outlined" className={classes.btn}>
//             Take a Tour <ArrowForwardIcon style={{ marginLeft: "0.3rem" }} />
//           </Button>
//         </Grid>
//       </Grid>
//       {/* -----------                     Spices                    ---------*/}
//       <Grid
//         container
//         style={{
//           height: "450px",
//           marginBottom: "2rem",
//           backgroundImage: `linear-gradient( rgba(0, 01, 0, 0.6), rgba(0, 0, 0, 0.5) ),url(${spicesBackground})`,
//         }}
//         alignItems="center"
//         direction="column"
//         className={classes.infoBackground}
//       >
//         <Grid item>
//           <Typography variant="h4" className={classes.mainSpices}>
//             Various Taste & Flavours
//           </Typography>
//           <Typography className={classes.subSpices} variant="subtitle1">
//             <FormatQuoteIcon style={{ transform: "scaleX(-1)" }} />
//             They add flavour, aroma, texture and colour to your culinary
//             creations
//             <FormatQuoteIcon />
//           </Typography>
//           <Button variant="outlined" className={classes.Sbtn}>
//             Take a Tour <ArrowForwardIcon style={{ marginLeft: "0.3rem" }} />
//           </Button>
//         </Grid>
//       </Grid>
//       {/* -----------                     seeds                    ---------*/}
//       <Grid
//         container
//         style={{
//           height: "450px",
//           marginBottom: "2rem",
//           backgroundImage: ` linear-gradient( rgba(0, 01, 0, 0.6), rgba(0, 0, 0, 0.5) ),url(${seeds})`,
//         }}
//         alignItems="center"
//         direction="column"
//         className={classes.infoBackground}
//       >
//         <Grid item>
//           <Typography variant="h4" className={classes.mainHerbs}>
//             Make Mealtimes Herbalicious
//           </Typography>
//           <Typography className={classes.subHerbs} variant="subtitle1">
//             <FormatQuoteIcon style={{ transform: "scaleX(-1)" }} />
//             Fresh herbs can turn the simplest meal tinto something <br />
//             exciting and special, Providing that extra character that bring
//             other ingredients <br />
//             into balance. <br />
//             They add flavour, aroma, texture and colour to your culinary
//             creations
//             <FormatQuoteIcon />
//           </Typography>
//           <Button variant="outlined" className={classes.btn}>
//             Take a Tour <ArrowForwardIcon style={{ marginLeft: "0.3rem" }} />
//           </Button>
//         </Grid>
//       </Grid>
//               { /* -----------                     special                    ---------*/}
//       <Grid
//         container
//         style={{
//           height: "450px",
//           marginBottom: "2rem",
//           backgroundImage: `linear-gradient( rgba(0, 01, 0, 0.6), rgba(0, 0, 0, 0.5) ),url(${special})`,
//         }}
//         alignItems="center"
//         direction="column"
//         className={classes.infoBackground}
//       >
//         <Grid item>
//           <Typography variant="h4" className={classes.mainSpices}>
//             Various Taste & Flavours
//           </Typography>
//           <Typography className={classes.subSpices} variant="subtitle1">
//             <FormatQuoteIcon style={{ transform: "scaleX(-1)" }} />
//             They add flavour, aroma, texture and colour to your culinary
//             creations
//             <FormatQuoteIcon />
//           </Typography>
//           <Button variant="outlined" className={classes.Sbtn}>
//             Take a Tour <ArrowForwardIcon style={{ marginLeft: "0.3rem" }} />
//           </Button>
//         </Grid>
//       </Grid>
//     </Fragment>
//   );
// };
// export default Overview;

// const useStyle = makeStyles((theme) => ({
//   infoBackground: {
//     ...theme.typography.backCategory,
//     width: "95%",
//     marginLeft: "2rem",
//     [theme.breakpoints.down("sm")]: {
//       width: "100%",
//       marginLeft: "0rem",
//     },
//   },
//   mainHerbs: {
//     ...theme.typography.mainTitle,
//     marginRight: "50rem",

//     [theme.breakpoints.down("md")]: {
//       fontSize: "2rem",
//       marginRight: "40rem",
//     },

//     [theme.breakpoints.down("sm")]: {
//       fontSize: "2rem",
//       marginRight: "5rem",
//     },
//   },

//   subHerbs: {
//     ...theme.typography.sub,
//     [theme.breakpoints.down("sm")]: {
//       fontSize: "1rem",
//       marginRight: "1rem",
//     },
//   },
//   btn: {
//     ...theme.typography.contactBtn,
//   },
//   //         {/* -----------                     Spices                    ---------*/}
//   mainSpices: {
//     ...theme.typography.mainTitle,
//     marginLeft: "56rem",

//     [theme.breakpoints.down("md")]: {
//       fontSize: "2rem",
//       marginLeft: "13rem",
//     },
//     [theme.breakpoints.down("sm")]: {
//       fontSize: "2rem",
//       marginLeft: "1rem",
//     },
//   },
//   subSpices: {
//     ...theme.typography.sub,
//     marginLeft: "56rem",
//     marginTop: "1rem",
//     [theme.breakpoints.down("md")]: {
//       fontSize: "1rem",
//       marginLeft: "12rem",
//     },
//     [theme.breakpoints.down("sm")]: {
//       fontSize: "1rem",
//       marginLeft: "1rem",
//     },
//   },
//   Sbtn: {
//     ...theme.typography.contactBtn,
//     ...theme.typography.btn,
//     marginLeft: "56rem",
//     marginTop: "1rem",
//     [theme.breakpoints.down("md")]: {
//       marginLeft: "12rem",
//     },
//     [theme.breakpoints.down("sm")]: {
//       marginLeft: "1rem",
//     },
//   },
// }));
import React, { Fragment } from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

import product from "../../assets/other.png";
import spices from "../../assets/Spices.png";
import herbs from "../../assets/herbs.png";
import seeds from "../../assets/seeds.png";
import { Link } from "react-router-dom";

const HomeOverview = () => {
  const classes = useStyle();
  const MenusItem = Menu;
  return (
    <Fragment>
      {MenusItem.map((item) => (
        <Grid item key={item.id}>
          <Grid
            container
            style={{
              marginBottom: "2rem",
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
export default HomeOverview;

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
