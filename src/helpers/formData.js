const formData = (fd) => {
    return (
        [...fd.keys()].reduce((acc, item) => {
            acc[item] = fd.get(item);
            return acc;
        }, {})
    );
};

export default formData;