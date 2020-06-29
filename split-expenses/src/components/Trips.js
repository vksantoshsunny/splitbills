import React, { useContext } from 'react';
import Trip from './Trip'
import { TripsContext } from '../providers/TripsProvider';
import Grid from "@material-ui/core/Grid";

function Trips(){
    const trips = useContext(TripsContext);
 return(
     <Grid container>
         {trips.map(trip =><Grid key={trip.id} item xs={12} md={4}>
            <Trip {...trip}  />
         </Grid> )}
     </Grid>
 )
}

export default Trips;