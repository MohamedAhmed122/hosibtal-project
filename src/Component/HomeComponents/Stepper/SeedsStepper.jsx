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
    label: "Seeds – Anisum",
    image: "https://i.ibb.co/N9K6zSJ/Anise-1024x1024-2x.png",
  },
  {
    label: "Seeds - caraway",

    image:
      "https://i.ibb.co/wzxRvsM/dill-cumin-spice-seed-fenugreek-others-png-clip-art.png",
  },
  {
    label: "Seeds - Fennel",
    image:
      "https://i.ibb.co/GxrFxgG/fennel-mukhwas-seed-cumin-spice-mustard-seed.jpg",
  },
  {
    label: "Seeds -Cumin",
    image: "https://i.ibb.co/y5PPQXy/cumin-seeds-jeera-500x500-500x500.png",
  },
  {
    label: "Seeds - Fenugreek",
    image:
      "https://i.ibb.co/bWGVwGY/facts-about-fenugreek-theodore-medium-fenugreeks-png-562-410.png",
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

const SeedsStepper = () => {
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
export default SeedsStepper;
