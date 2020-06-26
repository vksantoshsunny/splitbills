import React, { useContext }  from 'react';
import Trips from './Trips';
import SignIn from './SignIn';
import Signout from './SignOut';
import { UserContext } from '../providers/UserProvider';



const  Home = () => {
    const user = useContext(UserContext);
    if(!user || user.userInfo.loaded == false){
        return <SignIn/>
       }

    return (
        <div>
        <h1>Split Expense</h1>
        <Trips />
        <Signout/>
        </div>
    )
}

export default Home;
