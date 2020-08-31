import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [

  {
    label: "Spices - Red Chili",

    image: 'https://i.ibb.co/yN5FStt/cayenne-pepper-png-images-free-png-library-chili-peppers-png-3552-2796.png',

  },
  {
    label: "Spices - Rosemary",
    image: 'https://i.ibb.co/THQP77G/114-1143163-transparent-rosemary-png.png'
  },
  {
    label: "Spices -Thyme",
    image: 'https://i.ibb.co/ZSJqY8X/flower-garden-thyme-herb-food-garden-thyme-spice-essential-oil-coriander-png-clipart.jpg',
  },
  {
    label: "Dried Tomatoes",

    image: 'https://i.ibb.co/g9Dbg2R/scarlatto-red-pomodori-2016.png'

  },
  {
    label: "  Garlic",
    image: 'https://i.ibb.co/x5Xkznc/8721f5869b6a260d84d9b0b5a7e469a6.jpg',
},
  {
    label: " Onion",
    image: 'https://i.ibb.co/Xpy9YC9/unnamed.png',
},
 
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    marginBottom: "4rem",
    // border: '1px solid #15888d',
    marginLeft: "4rem",
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    textAlign: "center",
    color: "black",
    backgroundColor: "#ecce76",
  },
  img: {
    height: 405,
    display: "block",
    maxWidth: 400,
    overflow: "hidden",
    width: "100%",
    filter: " brightness(65%)",
    "&:hover": {
      filter: " brightness(100%)",
    }
  },
  text: {
    color: "black",
    backgroundColor: "#ecce76",
  },
}));

const SpicesStepper = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography style={{ marginLeft: "5rem" }}>
          {tutorialSteps[activeStep].label}
        </Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.image} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        className={classes.text}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </div>
  );
};
export default SpicesStepper;
