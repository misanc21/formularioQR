import React, { useReducer } from 'react';

import FormContext from './formContext'
import FormReducer from './formReducer'

import {
    VALIDAR_FORMULARIO
} from '../../types'

const FormState = props => {
    
    const initialState = {
        datosform:{
            cantidad:'',
            fecha:'',
            id:''
        },
        errorForm: false
    }

    const [state, dispatch] = useReducer(FormReducer, initialState)
    
    const setErrorFormFunc = b => {
        dispatch({
            type: VALIDAR_FORMULARIO,
            payload: b
        })
    }

    return (
        <FormContext.Provider
            value={{
                setErrorFormFunc,
                errorForm: state.errorForm
            }}
        >
            {props.children}
        </FormContext.Provider>
    );
}
 
export default FormState;