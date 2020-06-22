import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import {MuiThemeProvider} from '@material-ui/core/styles/'
import {Theme} from './Theme'
function App() {
  return (
    <MuiThemeProvider theme={Theme}>
    <Header/>
    <Home/>
    </MuiThemeProvider>

  );
}

export default App;
