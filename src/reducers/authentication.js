import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS
} from '../actions';

const user = JSON.parse(localStorage.getItem('user'));

const authentication = (state, action) => {
    if (state === undefined) {
        if (user) {
            return {
                loggingIn: false,
                loggedIn: true,
                user
            }
        } else {
            return {
                loggingIn: false,
                loggedIn: false
            }
        }
    }

    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loggingIn: true,
                user: action.payload
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                loggedIn: true,
                user: action.payload
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false
            }

        case LOGOUT_SUCCESS:
            return {
                ...state,
                loggingIn: false
            }

        default:
            return state.authentication
    }
}

export default authentication;