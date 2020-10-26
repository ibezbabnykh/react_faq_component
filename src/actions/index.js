const productsLoaded = (newProducts) => {
    return {
        type: 'FETCH_PRODUCTS_SUCCESS',
        payload: newProducts
    }
}

const minibasketLoaded = () => {
    return {
        type: 'MINIBASKET_LOADED'
    }
}

const minibasketOpened = (isOpen) => {
    return {
        type: 'MINIBASKET_OPEN',
        payload: isOpen
    }
}

const cartLoaded = () => {
    return {
        type: 'FETCH_CART_SUCCESS'
    }
}

const itemAddedToCart = (id) => {
    return {
        type: 'ITEM_ADDED_TO_CART',
        payload: id,

    }
}

const fewItemsAddedToCart = (id, qty) => {
    return {
        type: 'FEW_ITEMS_ADDED_TO_CART',
        payload: id,
        qty: qty
    }
}

const itemRemovedFromCart = (id) => {
    return {
        type: 'ITEM_REMOVED_FROM_CART',
        payload: id
    }
}

const allItemsRemovedFromCart = (id) => {
    return {
        type: 'ALL_ITEMS_REMOVED_FROM_CART',
        payload: id
    }
}

const clearCart = () => {
    return {
        type: 'CLEAR_CART'
    }
}

export {
    productsLoaded,
    minibasketLoaded,
    minibasketOpened,
    cartLoaded,
    itemAddedToCart,
    fewItemsAddedToCart,
    itemRemovedFromCart,
    allItemsRemovedFromCart,
    clearCart
}