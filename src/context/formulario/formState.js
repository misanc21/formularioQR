import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import {saveAs} from 'file-saver'

import FormContext from './formContext'
import FormReducer from './formReducer'

import {
    VALIDAR_FORMULARIO,
    INSERTAR_DATOSFORM
} from '../../types'
import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/tokenAuth'

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

    const setDatosForm = async datos =>{
        datos.id = uuidv4();
        dispatch({
            type: INSERTAR_DATOSFORM,
            payload: datos
        })
        const tk =  await clienteAxios.get('/api/reporte/token')
        tokenAuth(tk.data.token)
        await clienteAxios.post('/api/reporte', datos)
        await clienteAxios.get('/api/reporte', {responseType: 'blob'})
        .then(res=> {
            const pdfBlob = new Blob([res.data], {type:'application/pdf'})
            // saveAs(pdfBlob, 'reporte.pdf')
            const url = window.URL.createObjectURL(pdfBlob);
            window.open(url, '_blank')
        })
    }

    return (
        <FormContext.Provider
            value={{
                setErrorFormFunc,
                setDatosForm,
                errorForm: state.errorForm,
                datosform: state.datosform
            }}
        >
            {props.children}
        </FormContext.Provider>
    );
}
 
export default FormState;