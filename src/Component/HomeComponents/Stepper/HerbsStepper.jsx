import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Herbs – Chamomile',
    imgPath:'https://i.ibb.co/09wPGmB/camomile-PNG676.png'  },
  {
    label: 'Herbs - dill',
    imgPath:
      'https://i.ibb.co/Kzt3bkf/Anethumgraveolens-Herb-Dill-Blue-Green-Leaves-Bright-Yellow-Flowers-and-Golden-Seeds-on-a-Kitchen-Su.png'
  },
  {
    label: 'Herbs - Coriander Leaves',
    imgPath:'https://i.ibb.co/P9qrnQL/purepng-com-parsley-leavesfood-leaf-parsley-9415246383429y0vp.png'  },
  {
    label:'Herbs -Lemon Grass',
    imgPath:
     'https://i.ibb.co/VMmyYxD/loose-leaf-herbal-tea-sweet-lemongrass-1-5e20dfb9-3a54-43a0-8637-257f420e7954-860x.png'
  },
  {
    label: 'Herbs - Parsley',
    imgPath:
    'https://i.ibb.co/W5ZhfjZ/pngtree-fresh-coriander-green-leaf-realistic-parsley-png-image-3688072.jpg',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    marginBottom: '4rem',
    // border: '1px solid #15888d',
    marginLeft: '2rem'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    textAlign: 'center',
    color: 'black',
    backgroundColor:'#ecce76'
  },
  img: {
    height: 405,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
    filter: " brightness(65%)",
    "&:hover": {
      filter: " brightness(100%)",
    }

  },
  text:{
    color: 'black',
    backgroundColor:'#ecce76'
  }
}));

const HerbsStepper =()=> {
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
          <Typography style={{marginLeft: '4rem'}}>{tutorialSteps[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={step.imgPath} alt={step.label} />
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
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              
            </Button>
          }
        />
      </div>
    );
  
}
export default  HerbsStepper;