import {Button} from '@material-ui/core'
import React from 'react';
import {SignOut} from './Firebase'

function Signout(){
    return(
        <Button variant="contained" color="primary" onClick={SignOut}>
            SignOut 
        </Button>
    )
}


export default Signout