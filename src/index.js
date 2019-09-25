import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import AddTodo from './components/AddTodo/AddTodo';
import Multiplier from './components/Multiplier/Multiplier'

import * as serviceWorker from './serviceWorker';
import ArticlesGrid from './components/ArticlesGrid/ArticlesGrid';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <div>
        <AddTodo />
        <Multiplier />
        <ArticlesGrid />
    </div>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
