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

//I think it could be write simpler
// also better to move this function in utils, not in actions
const fetchProducts = (getData) => (dispatch) => {
    dispatch(productsRequested());
    getData()
        .then((data) => dispatch(productsLoaded(data)))
        .catch((err) => dispatch(productsError(err)));
};

// better to call actions on the same manner as action type
// exp: fetchMinibasketSuccess() -> FETCH_MINIBASKET_SUCCESS
// and will be a plus if it called as a verb
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

// addItemToCart
const itemAddedToCart = (id) => {
    return {
        type: 'ITEM_ADDED_TO_CART',
        payload: id,

    }
}

// addItemsToCart
const fewItemsAddedToCart = (id, qty) => {
    return {
        type: 'FEW_ITEMS_ADDED_TO_CART',
        payload: id,
        qty: qty
    }
}

// removeItemFromCart
const itemRemovedFromCart = (id) => {
    return {
        type: 'ITEM_REMOVED_FROM_CART',
        payload: id
    }
}

// removeAllItemsFromCart
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
};

// better to split each action in separate file and import them in index.js
// and make constants with action type 
// for exp: 
// const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
// and then use them in actions
// for exp: 
// const productsRequested = () => ({
//   type: FETCH_PRODUCTS_REQUEST,
// });