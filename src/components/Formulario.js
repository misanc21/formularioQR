import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, TextField, Button } from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';


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

    return (
        <Card className={classes.root}>
            <CardHeader 
                title="Ingresa los datos"
                subheader = "todos los datos son requeridos"
            />
            <CardContent>
                <form>
                    <TextField
                        className={classes.textField}
                        id="cantidad"
                        label="Cantidad"
                        placeholder="Inserta la cantidad"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        className={classes.textField}
                        id="fecha"
                        label="Fecha"
                        type="datetime-local"
                        placeholder="Inserta la fecha"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <ColorButton 
                        variant="contained"
                        color="primary"
                        className={classes.margin} 
                        fullWidth
                    >
                        Generar
                    </ColorButton>
                </form>
            </CardContent>
        </Card>
    );
}
 
export default Formulario;