const updateProductList = (state, action) => {
    if (state === undefined) {
        return {
            products: []
        }
    }

    switch (action.type) {
        case 'FETCH_PRODUCTS_SUCCESS':
            return {
                products: action.payload
            }
        
        default:
            return state.productList
    }
}

export default updateProductList;