const productsLoaded = (newProducts) => {
    return {
        type: 'PRODUCTS_LOADED',
        payload: newProducts
    }
}

const minibasketLoaded = (isOpen) => {
    return {
        type: 'MINIBASKET_OPEN',
        payload: isOpen
    }
}

export {
    productsLoaded,
    minibasketLoaded
}