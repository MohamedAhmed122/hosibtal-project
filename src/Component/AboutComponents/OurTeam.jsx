import React, { Fragment } from "react";
import { Grid, Typography, makeStyles, Card, CardContent } from "@material-ui/core";
import ceo from '../../assets/ceo.png'

const Team = () => {
const classes = useStyles();
return (
    <Fragment>
        <Grid container item style={{marginTop: '12rem'}}>
            <Typography variant="h3" className={classes.aboutTitle}>
            Team LeaderShip
            </Typography>
        </Grid>
        <Grid container justify="space-around" style={{ marginTop: "4rem" }}>
            <Grid item>
            <Card className={classes.mainCard}>
                <CardContent>
                <Grid container direction="row">
                    <Grid item>
                    <img alt="ceo" src={ceo} className={classes.img} />
                    </Grid>
                    <Grid item>
                    <Typography variant="h5" style={{color: '#1d8794',  marginTop:'2rem'}}>Khaled Ali</Typography>
                    <Typography variant="h6" style={{ marginLeft: '1rem', color: '#1d8794'}}>
                        CEO & Co-founder
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        style={{ textAlign: "center", maxWidth: "20rem" }}
                    >
                        La région des Alpes est située à l’Est de la France. Les
                        Alpes sont la chaîne de montagnes la plus haute d’Europe,
                    </Typography>
                    </Grid>
                </Grid>
                </CardContent>
            </Card>
            </Grid>
            <Grid item>
            <Card className={classes.mainCard}>
                <CardContent>
                <Grid container direction="row">
                    <Grid item>
                    <img alt="ceo" src={ceo} className={classes.img} />
                    </Grid>
                    <Grid item>
                    <Typography variant="h5"style={{color: '#1d8794' , marginTop:'2rem'}}>Khaled Ali</Typography>
                    <Typography variant="h6" style={{ marginLeft: '1.5rem',color: '#1d8794'  }}>
                        Co-founder 
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        style={{ textAlign: "center", maxWidth: "20rem" }}
                    >
                        La région des Alpes est située à l’Est de la France. Les
                        Alpes sont la chaîne de montagnes la plus haute d’Europe,
                    </Typography>
                    </Grid>
                </Grid>
                </CardContent>
            </Card>
            </Grid>
        </Grid>
    </Fragment>
  );
};
export default Team

const useStyles =makeStyles((theme)=>({
    aboutTitle: {

        marginLeft: "4rem",
        color: "#1d8794",
        margin: "1rem",
    },
    img:{
        height:'200px',
        width: '200px',
        borderRadius: '50%',
        margin:'1rem',
    },
    mainCard:{
    boxShadow: theme.shadows[4],
    borderWidth: '8px',
    borderRadius: 15,
    borderRightStyle: 'solid',
    borderColor: '#1d8794',
    marginBottom: '5rem',
    [theme.breakpoints.down("sm")]: {
        marginBottom:'3rem',
        width: '28rem'
    },
    
    '&:hover':{
        borderWidth: '5px',
        boxShadow: theme.shadows[10],
    },
}
}))