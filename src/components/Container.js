import React, {useContext} from 'react';
import FormContext from '../context/formulario/formContext'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Formulario from './Formulario'
import Hoja from './Hoja'

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
    const formsContext = useContext(FormContext)
    const {
        datosForm
    } = formsContext

    return ( 
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item md={6} xs={12} sm={6}>
                    <Formulario/>
                </Grid>
                <Grid item md={6} xs={12} sm={6}>
                    <Hoja />
                </Grid>
            </Grid>
        </div>
     );
}
 
export default Container;