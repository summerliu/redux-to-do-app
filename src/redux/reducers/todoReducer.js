const initialState = {
    id: '',
    content: {},
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const { id, conetent } = action.payload;
            return {
                ...state,
                conetent,
            };
            case 'TOGGLE_TODO':
            return {
                ...state,
                id,
            };
        default:
            return state;
    };
};

export default todoReducer;