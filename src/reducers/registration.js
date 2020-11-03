import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from '../actions';

const registration = (state, action) => {
    if (state === undefined) {
        return {
            registering: false
        };
    }

    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                registering: true
            }

        case REGISTER_SUCCESS:
            return {
                registering: false
            }

        case REGISTER_FAILURE:
            return {
                registering: false
            }

        default:
            return state.registration
    }
}

export default registration;