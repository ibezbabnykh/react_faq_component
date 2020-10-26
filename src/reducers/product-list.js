const createProductList = (products, item, idx) => {
    return [
        ...products.slice(0, idx),
        item,
        ...products.slice(idx + 1)
    ]
}

const updatedProductList = (state, products) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    let newProductList = products;

    if (cartItems) {
        cartItems.forEach((product) => {
            const itemIndex = products.findIndex(({ id }) => id === product.id);

            newProductList = createProductList(newProductList, product, itemIndex);
        });
    }

    return {
        ...state,
        products: newProductList
    }
}

const updatedProductItem = (item, itemOld = {}, quantity) => {
    const {
        id = item.id,
        brand = item.brand,
        category = item.category,
        color = item.color,
        date = item.date,
        inventoryCount = item.inventoryCount,
        occassion = item.occassion,
        name = item.name,
        description = item.description,
        img = item.img,
        price = item.price,
        size = item.size,
        raitingAvg = item.raitingAvg,
        raitngCount = item.raitngCount,
        retailPrice = item.retailPrice,
        season = item.season,
        shoeSize = item.shoeSize,
        count = 0
    } = itemOld;

    return {
        id,
        brand,
        category,
        color,
        date,
        inventoryCount,
        occassion,
        name,
        description,
        img,
        price,
        size,
        raitingAvg,
        raitngCount,
        retailPrice,
        season,
        shoeSize,
        count: count + quantity
    }
}

const updatedProduct = (state, itemId, quantity) => {
    const { productList: { products } } = state;
    const item = products.find((item) => item.id === itemId);
    const itemIndex = products.findIndex(({ id }) => id === itemId);
    const itemOld = products[itemIndex];

    const newItem = updatedProductItem(item, itemOld, quantity);

    return {
        ...state,
        products: createProductList(products, newItem, itemIndex)
    }
}

const updateProductList = (state, action) => {
    if (state === undefined) {
        return {
            products: []
        }
    }

    let item;

    switch (action.type) {
        case 'FETCH_PRODUCTS_SUCCESS':
            return updatedProductList(state, action.payload)

        case 'ITEM_ADDED_TO_CART':
            return updatedProduct(state, action.payload, 1)

        case 'FEW_ITEMS_ADDED_TO_CART':
            item = state.productList.products.find((item) => item.id === action.payload);

            return updatedProduct(state, action.payload, action.qty - item.count)

        case 'ITEM_REMOVED_FROM_CART':
            return updatedProduct(state, action.payload, -1)

        case 'ALL_ITEMS_REMOVED_FROM_CART':
            item = state.productList.products.find((item) => item.id === action.payload);

            return updatedProduct(state, action.payload, -item.count)

        default:
            return state.productList
    }
}

export default updateProductList;