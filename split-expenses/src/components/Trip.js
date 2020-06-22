import {Card, CardContent, Typography} from '@material-ui/core'
import React from 'react';


function Trip({title, description}) {
return(
        <Card>
            <CardContent>
              <Typography variant="h2">{title}</Typography>
              <Typography variant="h5">{description}</Typography>  
            </CardContent>
        </Card>
)
}

export default Trip;