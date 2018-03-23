import { createStore , combineReducers } from 'redux';
import rootReducer from './../reducers/index';

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        initialState);

    if (module.hot) {
        module.hot.accept('./../reducers', () => {
            const nextRootReducer = require('./../reducers');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}