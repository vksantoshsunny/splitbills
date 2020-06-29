import React, {useContext} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {UserContext} from '../providers/UserProvider';


function AuthRoute({ component: Component, ...rest }) {
    
    const user = useContext(UserContext);
    return (
    <Route {...rest} render={props =>
        !user || user.userInfo.loaded == false ? (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        ) : (
            <Component {...props} />
        )
      }>

      </Route>
)

}


export default AuthRoute