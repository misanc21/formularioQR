import {
    VALIDAR_FORMULARIO
} from '../../types'

export default (state, action) => {
    switch(action.type) {
        case VALIDAR_FORMULARIO:
            return{
                ...state,
                errorForm: action.payload
            }
        default:
            return state
    }
}  

