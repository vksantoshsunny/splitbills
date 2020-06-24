import React from 'react';
import Trip from './Trip'
import AddTrip from './AddTrip'

function Trips({trips}){
 return(
     <div>
         {trips.map(trip => <Trip {...trip} key={trip.id} />)}
         <AddTrip/>
     </div>
 )
}

export default Trips;