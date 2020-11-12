export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';

export const fetchProductsSuccess = (newProducts) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: newProducts
});