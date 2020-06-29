import {Fab} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import React, {useState} from 'react';
import { firestore } from './Firebase';
import {Dialog, DialogContent, DialogTitle, DialogActions, Button, TextField} from '@material-ui/core';

function AddTrip(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [open, setOpen] = useState(false);
    

    const handleClickOpen = () => {
        setOpen(true);
      };

    const handleClose = () => {
        setOpen(false);
      };
    
    const handleSubmit =  async () => {
        const trip = {
            title: title,
            description : description
        }
        await firestore.collection('trips').add(trip);
  
        setOpen(false);
      };
    return(
        <div>
        <Fab aria-label="add" onClick={handleClickOpen}>
        <AddIcon color="primary"/>
        </Fab>
        <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle>Add Trip</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="title"
            label="Title"
            type="text"
            value={title}
            fullWidth
            onChange={e => setTitle(e.target.value)}
          />
          <TextField
            autoFocus
            id="description"
            label="description"
            type="text"
            value={description}
            fullWidth
            onChange={e => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} >
            Cancel
          </Button>
          <Button onClick={handleSubmit} >
            Add
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    )
}

export default AddTrip
