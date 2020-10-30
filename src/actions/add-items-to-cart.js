export const ADD_ITEMS_TO_CART = 'ADD_ITEMS_TO_CART';

export const addItemsToCart = (id, qty) => ({
    type: ADD_ITEMS_TO_CART,
    payload: id,
    qty: qty
});