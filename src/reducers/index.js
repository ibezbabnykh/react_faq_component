import updateShoppingCart from './shopping-cart';
import updateProductList from './product-list';
import updateMinibasket from './minibasket';
import updateWishList from './wish-list';
import authentication from './authentication';
import registration from './registration';
import alert from './alert';

const reducer = (state, action) => {
    return {
        authentication: authentication(state, action),
        registration: registration(state, action),
        alert: alert(state, action),
        productList: updateProductList(state, action),
        shoppingCart: updateShoppingCart(state, action),
        minibasket: updateMinibasket(state, action),
        wishLists: updateWishList(state, action)
    }
}

export default reducer;