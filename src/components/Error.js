import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root:{
        marginTop: '1rem'
    }
})
const Error = ({msg}) => {
    const classes = useStyles();

    return (
        <Alert className={classes.root} severity="warning">{msg}</Alert>
    );
}
 
export default Error;