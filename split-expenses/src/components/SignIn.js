import {Button} from '@material-ui/core'
import React, { useState } from 'react';
import {SignInWithGoogle} from './Firebase'
import { Link, Redirect } from 'react-router-dom';

function SignIn(props){

    const { from } = props.location.state || { from: { pathname: "/" } };
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);

    const handleLogin = () => {
        SignInWithGoogle();
        setRedirectToReferrer(true);
    }

    if (redirectToReferrer) {
        return <Redirect to={from} />;
      }

    return(
        <>
        <Link to="/">App</Link>
        <Button variant="contained" color="primary" onClick={handleLogin}>
            Sign-In Google
        </Button>
        </>
    )
}


export default SignIn