export const REMOVE_ITEMS_FROM_CART = 'REMOVE_ITEMS_FROM_CART';

export const removeItemsFromCart = (id) => ({
    type: REMOVE_ITEMS_FROM_CART,
    payload: id
});