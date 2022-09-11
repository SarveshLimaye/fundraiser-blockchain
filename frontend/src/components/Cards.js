import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useNavigate } from 'react-router-dom';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button
} from '@material-ui/core';
import { Link } from 'react-router-dom';



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(12, 4),
    marginTop: '0%',
  },
  card: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid black',
    borderRadius: '5px',
    textAlign: 'center',
  },
  icon: {
    padding: theme.spacing(2, 0),
  },
  title: {
    padding: theme.spacing(2),
  },
  featureList: {
    padding: theme.spacing(2),
  },
}));

const Cards = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Container component="section" maxWidth="lg" className={classes.root}>
      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={12} sm={4}>
          <div className={classes.card}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="http://images.summitmedia-digital.com/reportrworld/images/2020/11/16/donation-1-1605507760.jpg"
            />
            <Typography variant="h5" component="h3" className={classes.title}>
              Food Donation Drive
            </Typography>
            <Typography className={classes.featureList}>
              Help us buy food for needy.
            </Typography>
            <Button color="primary" variant="contained" style={{marginBottom:"1rem"}} onClick={() => navigate('/onlineEvent') }>Donate Now</Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.card}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://epe.brightspotcdn.com/dims4/default/93eda02/2147483647/strip/true/crop/1415x960+25+0/resize/840x570!/quality/90/?url=https%3A%2F%2Fepe-brightspot.s3.amazonaws.com%2Fb9%2Fb8%2F6af257e64ceeb87a445355a20cf8%2F050222-blood-drive-ap-bs.jpg"
            />
            <Typography variant="h5" component="h3" className={classes.title}>
              Save Angela
            </Typography>
            <Typography className={classes.featureList}>
              She needs your help to fight cancer
            </Typography> <Button color="primary" variant="contained" style={{marginBottom:"1rem"}} onClick={() => navigate('/inPersonEvent') }>Donate Now</Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.card}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://smart.com.ph/About/images/default-source/Newsroom/smart-boosts-gadget-donation-drive-for-deserving-marikina-students.jpg?sfvrsn=0"
            />
            <Typography variant="h5" component="h3" className={classes.title}>
              Save John
            </Typography>
            <Typography className={classes.featureList}>
              Save a life now.
            </Typography>

            <Button color="primary" variant="contained" style={{marginBottom:"1rem"}} onClick={() => navigate('/onlineEvent') }>Donate Now</Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cards;