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
};

const updateSortCartItems = (cartItems) => {
    return [
        ...cartItems
    ]
};

const getItemIndex = (arr, itemIdx) => {
    return arr.findIndex(({ id }) => id === itemIdx);
};

const updateCartItem = (item, itemOld = {}, quantity, arrLength) => {
    
    const {
        id = item.id,
        brand = item.brand,
        name = item.name,
        category = item.category,
        description = item.description,
        img = item.img,
        price = item.price,
        size = item.size,
        sortIdx = arrLength,
        count = 0,
        total = 0
    } = itemOld;

    return {
        id,
        brand,
        name,
        category,
        description,
        img,
        price,
        size,
        sortIdx: sortIdx + 1,
        count: count + quantity,
        total: Math.round((total + quantity * price) * 100) / 100
    }
};

const compareValues = (key, order = 'asc') => {
    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            return 0;
        }

        const varA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];

        let comparison = 0;

        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }

        return (
            (order === 'desc') ? (comparison * -1) : comparison
        );
    }
};

const sortedCartItems = (state, value) => {
    const { shoppingCart: { cartItems, orderTotalCount, orderTotalPrice } } = state;
    const sortArray = cartItems.sort(compareValues(value));

    return {
        ...state,
        cartItems: updateSortCartItems(sortArray),
        orderTotalCount: orderTotalCount,
        orderTotalPrice: orderTotalPrice
    }
};

const updatedOrder = (state, itemId, quantity) => {
    const { productList: { products }, shoppingCart: { cartItems, orderTotalCount, orderTotalPrice } } = state;
    const item = products.find((item) => item.id === itemId);
    const itemIndex = getItemIndex(cartItems, itemId);
    const itemOld = cartItems[itemIndex];

    const newItem = updateCartItem(item, itemOld, quantity, cartItems.length);

    return {
        ...state,
        cartItems: updateCartItems(cartItems, newItem, itemIndex),
        orderTotalCount: orderTotalCount + quantity,
        orderTotalPrice: Math.round((orderTotalPrice + quantity * newItem.price) * 100) / 100
    }
};

const updatedCartItems = (state) => {
    return {
        ...state,
        cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
        orderTotalCount: JSON.parse(localStorage.getItem('orderTotalCount')) || 0,
        orderTotalPrice: JSON.parse(localStorage.getItem('orderTotalPrice')) || 0
    }
};

const updateShoppingCart = (state, action) => {
    if (state === undefined) {
        return {
            cartItems: [],
            orderTotalPrice: 0,
            orderTotalCount: 0
        }
    }

    let item;

    switch (action.type) {
        case 'FETCH_CART_SUCCESS':
            return updatedCartItems(state)

        case 'ITEM_ADDED_TO_CART':
            return updatedOrder(state, action.payload, 1)

        case 'FEW_ITEMS_ADDED_TO_CART':
            item = state.shoppingCart.cartItems.find((item) => item.id === action.payload);

            return updatedOrder(state, action.payload, action.qty - item.count)

        case 'ITEM_REMOVED_FROM_CART':
            return updatedOrder(state, action.payload, -1)

        case 'ALL_ITEMS_REMOVED_FROM_CART':
            item = state.shoppingCart.cartItems.find((item) => item.id === action.payload);

            return updatedOrder(state, action.payload, -item.count)

        case 'CLEAR_CART':
            return {
                ...state,
                orderTotalPrice: 0,
                orderTotalCount: 0,
                cartItems: []
            }

        case 'SORT_CART':
            return sortedCartItems(state, action.payload)

        default:
            return state.shoppingCart
    }
};

export default updateShoppingCart;