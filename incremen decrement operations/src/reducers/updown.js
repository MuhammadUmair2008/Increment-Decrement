const initialState = 0;

const changeTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT": return state + 2;
        case "DECREMENT": return state - 1;
        default: return state;
    }
}

export default changeTheNumber;
