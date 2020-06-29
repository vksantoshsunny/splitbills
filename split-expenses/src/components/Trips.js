import React, { useContext } from 'react';
import Trip from './Trip'
import { TripsContext } from '../providers/TripsProvider';
import Grid from "@material-ui/core/Grid";

function Trips(){
    const trips = useContext(TripsContext);
 return(
     <div>
         {trips.map(trip => <Trip {...trip} key={trip.id} />)}
         <AddTrip/>
     </div>
 )
}

export default Trips;
