import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
// import Multiplier from './components/Multiplier/Multiplier';
// import ArticlesGrid from './components/ArticlesGrid/ArticlesGrid';
import LoginForm from './components/LoginForm/LoginForm';
import TodoApp from './components/TodoApp/TodoApp';
import Main from './components/Main';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './rdx/store';

import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'


//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <div>
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/login" component={LoginForm} />
                    <Main>
                        <Route exact path="/" component={TodoApp} />
                    </Main>
                </Switch>
            </Router>
        </Provider>
    </div>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
