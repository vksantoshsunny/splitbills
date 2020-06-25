import {Button} from '@material-ui/core'
import React from 'react';
import {SignInWithGoogle} from './Firebase'

function SignIn(){
    return(
        <Button variant="contained" color="primary" onClick={SignInWithGoogle}>
            Sign-In Google
        </Button>
    )
}


export default SignIn