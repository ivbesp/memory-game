import { combineReducers } from 'redux';
import page from './page'
import cards from './cards';
import score from './score';

const rootReducer = combineReducers({
    page,
    cards,
    score
});

export default rootReducer;