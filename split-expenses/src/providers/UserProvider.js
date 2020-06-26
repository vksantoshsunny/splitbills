import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../components/Firebase';
import {createUserDocument , collectIdsAndData} from '../utils'

export const UserContext = createContext();

function UserProvider(props){

    const [userInfo, setUserInfo] = useState({userInfo : {user:null,loaded:false}})

    const loadUserInfo = () => {

        auth.onAuthStateChanged(async userdetail => {
            const userRef = await createUserDocument(userdetail);

            if (!userRef) return;
      
            userRef.onSnapshot(snapshot => {
              const user = collectIdsAndData(snapshot);
              setUserInfo({userInfo:{user : user, loaded : true}})
            });
          });

    }

    useEffect(() => {
        loadUserInfo()
        },[]) 

    return(
    <UserContext.Provider value={userInfo}>{props.children}</UserContext.Provider>
    )

}

export default UserProvider