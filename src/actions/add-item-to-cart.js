export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';

export const addItemToCart = (id) => ({
    type: ADD_ITEM_TO_CART,
    payload: id
});