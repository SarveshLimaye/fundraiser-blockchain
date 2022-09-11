import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '80vh',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    paddingBottom: theme.spacing(4),
    color: '#fff',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '10%',
  },
  btn: {
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#fff',
    color: '#000',
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff',
    },
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="100%"
      position="center"
      image="https://www.goodwillaz.org/wordpress/wp-content/uploads/2018/04/5-15.jpg"
    />
      <div className={classes.overlay}>
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="#fff"
        >
          <Typography variant="h3" component="h1" className={classes.title}>
            "It's not how much we give but how much love we put into giving"
          </Typography>
          <Button color="primary" variant="contained" className={classes.btn}>
            Donate Now
          </Button>
        </Box>
      </div>
    </section>
  );
};

export default Hero;