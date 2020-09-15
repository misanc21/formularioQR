import {
    VALIDAR_FORMULARIO,
    INSERTAR_DATOSFORM,
    DATOS_PDF
} from '../../types'

export default (state, action) => {
    switch(action.type) {
        case VALIDAR_FORMULARIO:
            return{
                ...state,
                errorForm: action.payload
            }
        case INSERTAR_DATOSFORM:
            return({
                ...state,
                datosform: action.payload
            })
        case DATOS_PDF:
            return({
                ...state,
                datospdf: action.payload
            })
        default:
            return state
    }
}  

