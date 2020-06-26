import React, { createContext, useState, useEffect } from 'react';
import { firestore } from '../components/Firebase';

export const TripsContext = createContext();

function TripsProvider(props){
    const [trips, setTrips] = useState([])

    const loadTrips = () => { firestore.collection('trips').onSnapshot(snapshot => {
        setTrips(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      })}

    useEffect(() => {
        loadTrips()
        },[])

    return (
    <TripsContext.Provider value={trips}>{props.children}</TripsContext.Provider>
    )
}
export default TripsProvider