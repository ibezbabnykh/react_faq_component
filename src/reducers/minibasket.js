const updateMinibasket = (state, action) => {
    if (state === undefined) {
        return {
            isMiniBasketOpen: false
        }
    }

    switch (action.type) {
        case 'MINIBASKET_OPEN':
            return {
                isMiniBasketOpen: action.payload
            }

        default:
            return state.minibasket
    }
}

export default updateMinibasket;