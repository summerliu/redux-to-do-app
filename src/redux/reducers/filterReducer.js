const initialState = {
    id: '',
    content: {},
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FILTER':
            const { id, conetent } = action.payload;
            return {
                ...state,
                id,
                conetent,
            };
        default:
            return state;
    };
};

export default filterReducer;