const initialState = {
    products: [],
    isMiniBasketOpen: false
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'PRODUCTS_LOADED':
            return {
                ...state,
                products: action.payload
            }
            
        case 'MINIBASKET_OPEN':
            return {
                ...state,
                isMiniBasketOpen: action.payload
            }

        default:
            return state;
    }
}

export default reducer;