const productsRequested = () => {
    return {
        type: 'FETCH_PRODUCTS_REQUEST'
    };
};

const productsLoaded = (newProducts) => {
    return {
        type: 'FETCH_PRODUCTS_SUCCESS',
        payload: newProducts
    }
}

const productsError = (error) => {
    return {
        type: 'FETCH_PRODUCTS_FAILURE',
        payload: error
    };
};

const fetchProducts = (getData) => () => (dispatch) => {
    dispatch(productsRequested());
    getData()
        .then((data) => dispatch(productsLoaded(data)))
        .catch((err) => dispatch(productsError(err)));
};

const minibasketLoaded = () => {
    return {
        type: 'FETCH_MINIBASKET_SUCCESS'
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

const clearCart = () => {
    return {
        type: 'CLEAR_CART'
    }
}

const sortCart = (value) => {
    return {
        type: 'SORT_CART',
        payload: value
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
    fetchProducts,
    minibasketLoaded,
    minibasketOpened,
    cartLoaded,
    clearCart,
    sortCart,
    itemAddedToCart,
    fewItemsAddedToCart,
    itemRemovedFromCart,
    allItemsRemovedFromCart
}