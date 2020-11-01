import {
    FETCH_MINIBASKET_SUCCESS,
    OPEN_MINIBASKET
} from '../actions';

const updateMinibasket = (state, action) => {
    if (state === undefined) {
        return {
            isMiniBasketOpen: false
        }
    }

    switch (action.type) {
        case FETCH_MINIBASKET_SUCCESS:
            return {
                isMiniBasketOpen: false
            }

        case OPEN_MINIBASKET:
            return {
                isMiniBasketOpen: action.payload
            }

        default:
            return state.minibasket
    }
}

export default updateMinibasket;