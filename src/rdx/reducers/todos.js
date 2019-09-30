import types from '../actions/types';

const initialState = {
    todos: []
}

export default {
    todosReducer(state, action){
        if(typeof state === 'undefined'){
            return Object.assign({}, initialState);
        }

        switch(action.type){
            case types.ADD_TODO:
                return Object.assign({}, state, {
                    todos: [...state.todos, action.todo]
                });
            case types.DELETE_TODO:
                return state;
            default:
                return state;
        }
    }
}