export const getQueryParams = search => {
    const urlSearchParams = new URLSearchParams(search);
    const params = {};
    for(const [key, value] of urlSearchParams) {
        params[key] = value;
    }
    return params;
}