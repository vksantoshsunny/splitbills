
import React from 'react';
import Grid from "@material-ui/core/Grid";



function CardGridLayout(WrappedComponent){
  return function Wrapper(props){
    return(
      <Grid container spacing={3}>
      <WrappedComponent {...props} />
      </Grid>
    )
  }
}


export default CardGridLayout