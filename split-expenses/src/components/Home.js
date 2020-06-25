import React, { Component, useContext } from 'react';
import {firestore} from './Firebase';
import Trips from './Trips';
import SignIn from './SignIn';
import { TripsContext } from '../providers/TripsProvider';


const  Home = () => {
    return (
        <div>
        <h1>Split Expense</h1>
        <SignIn/>
        <Trips />
        </div>
    )
}

export default Home;
