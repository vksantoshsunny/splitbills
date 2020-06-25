import React, { useContext } from 'react';
import Trip from './Trip'
import AddTrip from './AddTrip'
import { TripsContext } from '../providers/TripsProvider';

function Trips(){
    const trips = useContext(TripsContext);
    console.log('trips in component', trips)
 return(
     <div>
         {trips.map(trip => <Trip {...trip} key={trip.id} />)}
         <AddTrip/>
     </div>
 )
}

export default Trips;