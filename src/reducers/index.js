const initialState = {
    products: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'PRODUCTS_LOADED':
            return state.payload
            
        default:
            return state;
    }
}

export default reducer;