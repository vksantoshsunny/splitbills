import React, { useContext }  from 'react';
import Trips from './Trips';
import SignIn from './SignIn';
import Signout from './SignOut';
import { UserContext } from '../providers/UserProvider';
import AddTrip from './AddTrip'



const  Home = () => {
    const user = useContext(UserContext);
    if(!user || user.userInfo.loaded == false){
        return <SignIn/>
       }

    return (
        <div>
        <Trips />
        <AddTrip />
        <Signout/>
        </div>
    )
}

export default Home;
