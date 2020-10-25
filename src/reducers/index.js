import updateShoppingCart from './shopping-cart';
import updateProductList from './product-list';
import updateMinibasket from './minibasket';

const reducer = (state, action) => {
    return {
        productList: updateProductList(state, action),
        shoppingCart: updateShoppingCart(state, action),
        minibasket: updateMinibasket(state, action)
    }
}

export default reducer;