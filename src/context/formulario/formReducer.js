import {
    VALIDAR_FORMULARIO,
    INSERTAR_DATOSFORM
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
        default:
            return state
    }
}  

