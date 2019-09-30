import { combinedReducers } from 'redux';
import todos from './todos';

const todoApp = combinedReducers({
    todos
})

export default todoApp;