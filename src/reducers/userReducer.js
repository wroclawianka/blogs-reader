export default (state = [], action) => {
    if (action.type === 'FETCH_USER') {
        return [...state, action.payload];
    } else {
        return state;
    }
}