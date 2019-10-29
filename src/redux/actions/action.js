const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const SET_FILTER = "SET_FILTER";

let nextTodoID = 0;

export const addTodo = (content) => ({
    type: ADD_TODO,
    payload: {
        id: ++ nextTodoID,
        content,
    },
});

export const toggle_todo = (id) => ({
    type: TOGGLE_TODO,
    payload: {
        id,
    },
});

export const set_filter = (filter) => ({
    type: SET_FILTER,
    payload: {
        filter,
    },
});
