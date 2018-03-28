import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './scss/style.scss';
import configureStore from './store/configureStore';
import App from './containers/App';
import Router from './containers/Router';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App>
            <Router/>
        </App>
    </Provider>,
    document.getElementById('root')
);

module.hot.accept();




