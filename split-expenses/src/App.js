import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {MuiThemeProvider} from '@material-ui/core/styles/'
import TripsProvider from './providers/TripsProvider'
import {Theme} from './Theme'
import UserProvider from './providers/UserProvider';
import SignIn from './components/SignIn';
import RequireAuth from './components/RequireAuth';
function App() {
  return (
    <Router>
    <MuiThemeProvider theme={Theme}>
      <UserProvider>
      <TripsProvider>
      <Switch>
      <Route path="/" component={Home} />
      </Switch>
      </TripsProvider>
      </UserProvider>
    </MuiThemeProvider>
    </Router>

  );
}

export default App;
