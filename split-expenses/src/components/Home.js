import React, { Component } from 'react';

import Trips from './Trips';

class Home extends Component {
  state = {
    trips: [
      {
        id: '1',
        title: 'A Very Hot Take',
        description: 'Hello 1'
        
      },
      {
        id: '2',
        title: 'The Sauciest of Opinions',
        description: 'Hello 2'
        
      },
    ],
  };

  render() {
    const { trips } = this.state;

    return (
        <div>
        <h1>Split Expense</h1>
        <Trips trips={trips} />
        </div>
    );
  }
}

export default Home;
