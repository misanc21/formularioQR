import React, {useContext} from 'react';

import FormContext from '../context/formulario/formContext' 

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, Button } from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      marginBottom: '5rem'
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    textField: {
        margin: '1rem 0.2rem'
      },
  });

const Hoja = () => {
    const formsContext = useContext(FormContext)
    const {
        datosform
    } = formsContext

    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader 
                title="Aqui van los datos del QR"
            />
            <CardContent>

            </CardContent>
        </Card>
    );
}
 
export default Hoja