export const ALERT_ERROR = 'ALERT_ERROR';

export const alertError = (message) => ({
    type: ALERT_ERROR,
    payload: message
});