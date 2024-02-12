const suffix = (value) => {
    if (value.length > 5) {
        return false;
    }

    const regex = /^[a-zA-Z0-9'.-]*$/;
    return regex.test(value);
};

module.exports = {
    suffix,
};
