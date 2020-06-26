import React, { useContext }  from 'react'
import {UserContext} from '../providers/UserProvider';
import { Redirect } from 'react-router-dom';

function RequireAuth(props) {
    const user = useContext(UserContext);
    if(!user || user.userInfo.loaded == false){
        return <Redirect to="/login"/>
       }
       return props.children;
}

export default RequireAuth