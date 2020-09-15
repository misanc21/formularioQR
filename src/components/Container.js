import React from 'react';

import {
  makeStyles,
  Grid 
} from '@material-ui/core';

import Formulario from './Formulario'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: '2rem'
    }
  }));


const Container = () => {
    const classes = useStyles();

    return ( 
        <div className={classes.root}>
            <Grid container spacing={3} justify="center">
                <Grid item  md={6}>
                    <Formulario/>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default Container;