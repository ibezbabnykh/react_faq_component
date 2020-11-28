export const LOGIN_REQUEST = 'LOGIN_REQUEST';

export const loginRequest = (user) => ({
    type: LOGIN_REQUEST,
    payload: user
});