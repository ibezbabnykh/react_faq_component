import {
    FETCH_WISH_LIST,
    ADD_NEW_LIST_TO_WISH_LIST
} from '../actions';

const updateList = (state, newItem) => {
    const { wishList: { list } } = state;
    console.log('first');

    return {
        ...state,
        list: [
            ...list,
            newItem
        ]
    }
};

const updateWishList = (state, action) => {
    if (state === undefined) {
        return {
            list: []
        }
    }

    switch (action.type) {
        case FETCH_WISH_LIST:
            return {
                ...state,
                list: JSON.parse(localStorage.getItem('wishList')) || []
            }

        case ADD_NEW_LIST_TO_WISH_LIST:
            return updateList(state, action.payload)

        default:
            return state.wishList
    }
};

export default updateWishList;