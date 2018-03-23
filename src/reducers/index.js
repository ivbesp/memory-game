import { combineReducers } from 'redux';
import PageReducer from './page'
import CardsReducer from './cards';
import ScoreReducer from './score';

const rootReducer = combineReducers({
    PageReducer,
    CardsReducer,
    ScoreReducer
});

export default rootReducer;