import React, {useContext, useState} from 'react';
import FormContext from '../context/formulario/formContext'

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, TextField, Button } from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';

import Error from './Error'

const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(yellow[500]),
      backgroundColor: yellow[500],
      '&:hover': {
        backgroundColor: yellow[700],
      },
    },
}))(Button);

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



const Formulario = () => {
    const classes = useStyles();
    const formsContext = useContext(FormContext)
    const {
        setErrorFormFunc,
        errorForm
    } = formsContext

    const [datos, setDatos] = useState({
        cantidad:'',
        fecha:''
    })
    let {cantidad, fecha} = datos

    const handleSubmit = e => {
        e.preventDefault()

        if(cantidad.trim() === '' || fecha.trim() === ''){
            setErrorFormFunc(true)
            return
        }
        setErrorFormFunc(false)
            
    }

    const handleOnChange = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Card className={classes.root}>
            <CardHeader 
                title="Ingresa los datos"
                subheader = "todos los datos son requeridos"
            />
            <CardContent>
                <form
                    onSubmit={handleSubmit}
                >
                    <TextField
                        className={classes.textField}
                        value={cantidad}
                        onChange={handleOnChange}
                        name="cantidad"
                        label="Cantidad"
                        placeholder="Inserta la cantidad"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        className={classes.textField}
                        value={fecha}
                        onChange={handleOnChange}
                        name="fecha"
                        label="Fecha"
                        type="datetime-local"
                        placeholder="Inserta la fecha"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <ColorButton
                        type='submit'
                        variant="contained"
                        color="primary"
                        className={classes.margin} 
                        fullWidth
                    >
                        Generar
                    </ColorButton>
                </form>
                {errorForm ? <Error msg="todos lo campos son obligatorios"/> : null}
            </CardContent>
        </Card>
    );
}
 
export default Formulario;