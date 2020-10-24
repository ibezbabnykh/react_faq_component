const initialState = {
    products: [],
    isMiniBasketOpen: false,
    cartItems: [],
    orderTotalPrice: 0,
    orderTotalCount: 0
}

const updateCartItems = (cartItems, item, idx) => {
    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ] 
    }

    if (idx === -1) {
        return [
            ...cartItems,
            item
        ]
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ]
}

const updateCartItem = (item, itemOld = {}, quantity) => {
    const {
        id = item.id,
        brand = item.brand,
        name = item.name,
        description = item.description,
        img = item.img,
        price = item.price,
        size = item.size,
        count = 0,
        total = 0
    } = itemOld;

    return {
        id,
        brand,
        name,
        description,
        img,
        price,
        size,
        count: count + quantity,
        total: total + quantity * price
    }
}

const updatedOrder = (state, itemId, quantity) => {
    const { products, cartItems, orderTotalCount, orderTotalPrice } = state;
    const item = products.find((item) => item.id === itemId);
    const itemIndex = cartItems.findIndex(({ id }) => id === itemId);
    const itemOld = cartItems[itemIndex];

    const newItem = updateCartItem(item, itemOld, quantity);

    return {
        ...state,
        cartItems: updateCartItems(cartItems, newItem, itemIndex),
        orderTotalCount: orderTotalCount + quantity,
        orderTotalPrice: orderTotalPrice + quantity*newItem.price
    }
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FETCH_PRODUCTS_SUCCESS':
            return {
                ...state,
                products: action.payload
            }

        case 'MINIBASKET_OPEN':
            return {
                ...state,
                isMiniBasketOpen: action.payload
            }

        case 'ITEM_ADDED_TO_CART':
            return updatedOrder(state, action.payload, 1)

        case 'FEW_ITEMS_ADDED_TO_CART':
            console.log('qty', action.qty);
            return updatedOrder(state, action.payload, action.qty)

        case 'ITEM_REMOVED_FROM_CART':
            return updatedOrder(state, action.payload, -1)

        case 'ALL_ITEMS_REMOVED_FROM_CART':
            const item = state.cartItems.find((item) => item.id === action.payload);
            
            return updatedOrder(state, action.payload, -item.count)

        default:
            return state;
    }
}

export default reducer;