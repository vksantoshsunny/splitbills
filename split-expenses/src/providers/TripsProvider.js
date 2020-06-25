import React, { createContext, useState, useEffect } from 'react';
import { firestore } from '../components/Firebase';

export const TripsContext = createContext();

function TripsProvider(props){
    const [trips, setTrips] = useState([])

    const updateTrips = () => { firestore.collection('trips').onSnapshot(snapshot => {
        setTrips(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      })}

    useEffect(() => {
        updateTrips()
        },[])

    return (
    <TripsContext.Provider value={trips}>{props.children}</TripsContext.Provider>
    )
}



export default TripsProvider