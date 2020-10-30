const createItemList = (items, item, idx) => {
    return [
        ...items.slice(0, idx),
        item,
        ...items.slice(idx + 1)
    ]
};

const updatedProductItem = (item, itemOld = {}, quantity) => {
    const { count = 0 } = itemOld;

    return {
        ...item,
        ...itemOld,
        count: count + quantity
    }
};

const updateProductPrice = (item, itemOld = {}) => {
    const {
        count = item.count
    } = itemOld;

    return {
        ...item,
        ...itemOld,
        price: item.price,
        total: Math.round((count * item.price) * 100) / 100
    }
};

const getItemIndex = (arr, itemIdx) => {
    return arr.findIndex(({ id }) => id === itemIdx);
};

const createNewItem = (newArr, itemId, oldArr, fn, ...Args) => {
    const item = newArr.find(({ id }) => id === itemId);
    const itemIndex = getItemIndex(oldArr, itemId);
    const itemOld = oldArr[itemIndex];

    return fn(item, itemOld, ...Args);
};

const updateItemsList = ({ wrapFn, arr, newArr, itemId, oldArr, fn, additionalArg }) => {
    const itemIndex = getItemIndex(arr, itemId);
    const newItem = createNewItem(newArr, itemId, oldArr, fn, ...additionalArg);

    return wrapFn(arr, newItem, itemIndex);
};

const updatedProduct = (state, itemId, quantity) => {
    const { productList: { products } } = state;

    return {
        ...state,
        products: updateItemsList({
            wrapFn: createItemList,
            arr: products,
            newArr: products,
            itemId: itemId,
            oldArr: products,
            fn: updatedProductItem,
            additionalArg: [
                quantity
            ]
        })
    }
};

const updateTotalPrice = (arr) => {
    let totalPrice = 0;

    arr.forEach(item => {
        const { count, price } = item;
        totalPrice = Math.round((totalPrice + count * price) * 100) / 100;
    });

    return totalPrice;
}

const updatedProductList = (state, products) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    let newProductList = products;
    let newCartItems = cartItems;
    let newTotalPrice = JSON.parse(localStorage.getItem('orderTotalPrice'));

    if (cartItems) {
        cartItems.forEach(product => {
            newProductList = updateItemsList({
                wrapFn: createItemList,
                arr: newProductList,
                newArr: products,
                itemId: product.id,
                oldArr: products,
                fn: updatedProductItem,
                additionalArg: [
                    product.count
                ]
            });

            newCartItems = updateItemsList({
                wrapFn: createItemList,
                arr: newCartItems,
                newArr: products,
                itemId: product.id,
                oldArr: newCartItems,
                fn: updateProductPrice,
                additionalArg: []
            });
        });

        newTotalPrice = updateTotalPrice(newCartItems);

        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
        localStorage.setItem('orderTotalPrice', newTotalPrice);
    }

    return {
        ...state,
        loading: false,
        error: null,
        products: newProductList
    }
};

const updateProductList = (state, action) => {
    if (state === undefined) {
        return {
            products: [],
            loading: true,
            error: null
        }
    }

    let item;

    switch (action.type) {
        case 'FETCH_PRODUCTS_REQUEST':
            return {
                products: [],
                loading: true,
                error: null
            }

        case 'FETCH_PRODUCTS_SUCCESS':
            return updatedProductList(state, action.payload)

        case 'FETCH_PRODUCTS_FAILURE':
            return {
                products: [],
                loading: false,
                error: action.payload
            }

        case 'ADD_ITEM_TO_CART':
            return updatedProduct(state, action.payload, 1)

        case 'ADD_ITEMS_TO_CART':
            item = state.productList.products.find(({ id }) => id === action.payload);

            return updatedProduct(state, action.payload, action.qty - item.count)

        case 'REMOVE_ITEM_FROM_CART':
            return updatedProduct(state, action.payload, -1)

        case 'REMOVE_ITEMS_FROM_CART':
            item = state.productList.products.find(({ id }) => id === action.payload);

            return updatedProduct(state, action.payload, -item.count)

        default:
            return state.productList
    }
};

export default updateProductList;