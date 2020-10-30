import { fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure } from '../actions';

const fetchProducts = (getData) => () => (dispatch) => {
    dispatch(fetchProductsRequest());
    getData()
        .then((data) => dispatch(fetchProductsSuccess(data)))
        .catch((err) => dispatch(fetchProductsFailure(err)));
};

export default fetchProducts;