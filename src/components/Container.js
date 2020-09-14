import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Formulario from './Formulario'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: '2rem'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


const Container = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item md={6} xs={12} sm={6}>
                    <Formulario/>
                </Grid>
                <Grid item md={6} xs={12} sm={6}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default Container;