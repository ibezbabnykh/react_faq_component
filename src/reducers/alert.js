import {
    ALERT_SUCCESS,
    ALERT_ERROR,
    ALERT_CLEAR
} from '../actions';

const alert = (state, action) => {
    if (state === undefined) {
        return {
            type: '',
            message: null
        }
    }

    switch (action.type) {
        case ALERT_SUCCESS:
            return {
                type: 'success',
                message: action.payload
            }

        case ALERT_ERROR:
            return {
                type: 'error',
                message: action.payload
            }

        case ALERT_CLEAR:
            return {
                type: '',
                message: null
            }

        default:
            return state.alert
    }
}

export default alert;