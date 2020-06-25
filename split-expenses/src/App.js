import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import {MuiThemeProvider} from '@material-ui/core/styles/'
import TripsProvider from './providers/TripsProvider'
import {Theme} from './Theme'
function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      <TripsProvider>
      <Header/>
      <Home/>
      </TripsProvider>
    </MuiThemeProvider>

  );
}

export default App;
