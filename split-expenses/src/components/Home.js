import React from 'react';
import Trips from './Trips';
import SignIn from './SignIn';
import Signout from './SignOut';


const  Home = () => {
    return (
        <div>
        <h1>Split Expense</h1>
        <SignIn/>
        <Signout/>
        <Trips />
        </div>
    )
}

export default Home;
