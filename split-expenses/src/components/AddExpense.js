import {Fab} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import React, {useState} from 'react';
import { firestore } from './Firebase';
import {Dialog, DialogContent, DialogTitle, DialogActions, Button, TextField} from '@material-ui/core';

function AddExpense({tripId}){
    const [purpose, setPurpose] = useState("");
    const [charge, setCharge] = useState("");
    const [open, setOpen] = useState(false);
    

    const handleClickOpen = () => {
        setOpen(true);
      };

    const handleClose = () => {
        setOpen(false);
      };
    
    const handleSubmit =  async () => {
        const expense = {
            charge: charge,
            purpose : purpose
        }
        await firestore.collection(`/trips/${tripId}/expenses`).add(expense);
  
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
            id="purpose"
            label="Purpose"
            type="text"
            value={purpose}
            fullWidth
            onChange={e => setPurpose(e.target.value)}
          />
          <TextField
            autoFocus
            id="charge"
            label="Charge"
            type="text"
            value={charge}
            fullWidth
            onChange={e => setCharge(e.target.value)}
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

export default AddExpense
