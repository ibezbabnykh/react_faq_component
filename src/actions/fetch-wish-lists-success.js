export const FETCH_WISH_LISTS_SUCCESS = 'FETCH_WISH_LISTS_SUCCESS';

export const fetchWishListsSuccess = (wishLists) => ({
    type: FETCH_WISH_LISTS_SUCCESS,
    payload: wishLists
});