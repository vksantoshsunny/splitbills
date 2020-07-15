import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '200%',
  },
}));

 function Layout(WrappedComponent) {
  return function Wrapper(props){
    const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
      <WrappedComponent {...props} />
      </Paper>
    </div>
  );
  }
}

export default Layout
