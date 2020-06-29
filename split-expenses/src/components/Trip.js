import {Card, CardContent, Typography, IconButton, CardActionArea} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import { firestore } from './Firebase'
import { withStyles } from "@material-ui/core/styles";
<<<<<<< HEAD
=======
import { useHistory } from 'react-router-dom';
>>>>>>>  updated grid layout


const styles = muiBaseTheme => ({
  card: {
    maxWidth: 600,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  media: {
    paddingTop: "56.25%"
  },
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing.unit * 3
  },
  divider: {
    margin: `${muiBaseTheme.spacing.unit * 3}px 0`
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -muiBaseTheme.spacing.unit
    }
  }
});

function Trip({id, title, description, classes}) {
<<<<<<< HEAD
=======

  let history = useHistory();
>>>>>>>  updated grid layout
  const tripRef = firestore.doc(`trips/${id}`);

  const handleClick = () => {
    history.push('/trips/'+id);
  }

return(
<<<<<<< HEAD

        <Card className={classes.card}>
            <CardContent>
=======
        <Card className={classes.card}>
          <CardActionArea onClick={handleClick}>
          <CardContent>
>>>>>>>  updated grid layout
              <Typography variant="h4">{title}</Typography>
              <Typography variant="caption">{description}</Typography>  
              <IconButton onClick={() => tripRef.delete()} aria-label="delete">
              <DeleteIcon color="primary"/>
              </IconButton>
            </CardContent>
          </CardActionArea>
        </Card>
)
}



export default Trip = withStyles(styles)(Trip)