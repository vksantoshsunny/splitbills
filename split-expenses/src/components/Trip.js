import {Card, CardContent, Typography, ButtonBase, IconButton} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import { firestore } from './Firebase'


function Trip({id, title, description}) {
  const tripRef = firestore.doc(`trips/${id}`);
return(
        <Card>
            <CardContent>
              <Typography variant="h2">{title}</Typography>
              <Typography variant="h5">{description}</Typography>  
              <IconButton onClick={() => tripRef.delete()} aria-label="delete">
              <DeleteIcon color="primary"/>
              </IconButton>
            </CardContent>
        </Card>
)
}

export default Trip;