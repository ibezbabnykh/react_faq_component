import {
    alertError,
    alertSuccess,
    loginRequest,
    loginSuccess,
    loginFailure,
    registrationRequest,
    registrationSuccess,
    registrationFailure,
    logoutSuccess
} from '../index';
import { history } from '../../helpers';

const logError = (dispatch, alert, action, message) => {
    dispatch(alert(message));
    dispatch(action(message));
};

const login = (postData) => (user) => (dispatch) => {
    dispatch(loginRequest(user));

    postData(user)
        .then((user) => {
            dispatch(loginSuccess(user));
            history.push('/');
            localStorage.setItem('user', JSON.stringify(user));
        })
        .catch((err) => {
            logError(dispatch, alertError, loginFailure, err.message);
        });
};

const register = (postData) => (newUser) => (dispatch) => {
    dispatch(registrationRequest(newUser));

    postData(newUser)
        .then((user) => {
            dispatch(registrationSuccess(user));
            history.push('/login');
            dispatch(alertSuccess('Registration successful'));
        })
        .catch((err) => {
            logError(dispatch, alertError, registrationFailure, err.message);
        });
}

const logout = () => () => (dispatch) => {
    localStorage.removeItem('user');
    dispatch(logoutSuccess());
};

export {
    login,
    register,
    logout
};