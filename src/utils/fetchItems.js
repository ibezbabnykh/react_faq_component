const fetchItems = (getData, request, success, failure) => () => (dispatch) => {
    dispatch(request());
    getData()
        .then((data) => dispatch(success(data)))
        .catch((err) => dispatch(failure(err)));
};

export default fetchItems;