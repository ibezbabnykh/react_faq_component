export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';

export const removeItemFromCart = (id) => ({
    type: REMOVE_ITEM_FROM_CART,
    payload: id
});