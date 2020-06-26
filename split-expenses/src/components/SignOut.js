import {Button} from '@material-ui/core'
import React from 'react';
import {SignOut} from './Firebase'

function Signout(){

    const handleSignOut = () => {
       var a =  SignOut();
    }


    return(
        <Button variant="contained" color="primary" onClick={handleSignOut}>
            SignOut 
        </Button>
    )
}


export default Signout