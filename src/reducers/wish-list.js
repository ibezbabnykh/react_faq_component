import {
    FETCH_WISH_LISTS_REQUEST,
    FETCH_WISH_LISTS_SUCCESS,
    FETCH_WISH_LISTS_FAILURE,
    UPDATE_WISH_LISTS_AFTER_REQUEST
} from '../actions';

const updateWishList = (state, action) => {
    if (state === undefined) {
        return {
            list: [],
            loading: true,
            error: null
        }
    }

    switch (action.type) {
        case FETCH_WISH_LISTS_REQUEST:
            return {
                list: [],
                loading: true,
                error: null
            }

        case FETCH_WISH_LISTS_SUCCESS:
            return {
                list: action.payload,
                loading: false,
                error: null
            };

        case FETCH_WISH_LISTS_FAILURE:
            return {
                list: [],
                loading: false,
                error: action.payload
            };

        case UPDATE_WISH_LISTS_AFTER_REQUEST:
            return {
                ...state,
                loading: true
            };

        default:
            return state.wishLists
    }
};

export default updateWishList;