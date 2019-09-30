import types from './types';


export default {
    addTodo(todo) {
        return {
            type: types.ADD_TODO,
            todo: todo
        }
    },

    removeTodo(todo) {
        return {
            type: types.REMOVE_TODO,
            todo: todo
        }
    },
}