import React, { Component } from 'react';
import {firestore} from './Firebase';
import Trips from './Trips';

class Home extends Component {
    state = {
        trips: [],
      };

  componentDidMount = async () => {
    const snapshot = await firestore.collection('trips').get();
  
    const trips = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  
    this.setState({ trips });
  }

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
