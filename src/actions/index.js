const productsLoaded = (newProducts) => {
    return {
        type: 'FETCH_PRODUCTS_SUCCESS',
        payload: newProducts
    }
}

const minibasketLoaded = (isOpen) => {
    return {
        type: 'MINIBASKET_OPEN',
        payload: isOpen
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

export {
    productsLoaded,
    minibasketLoaded,
    itemAddedToCart,
    fewItemsAddedToCart,
    itemRemovedFromCart,
    allItemsRemovedFromCart
}