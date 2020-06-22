import React from 'react';
import Trip from './Trip'

function Trips({trips}){
 return(
     <div>
         {trips.map(trip => <Trip {...trip} key={trip.id} />)}
     </div>
 )
}

export default Trips;