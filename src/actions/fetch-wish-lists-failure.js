export const FETCH_WISH_LISTS_FAILURE = 'FETCH_WISH_LISTS_FAILURE';

export const fetchWishListsFailure = (error) => ({
    type: FETCH_WISH_LISTS_FAILURE,
    payload: error
});