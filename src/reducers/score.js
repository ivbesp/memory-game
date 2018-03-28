import InitialState from './../initialstate';

export const score = (state = InitialState.score, action) => {
    switch(action.type) {
        case 'RESET_SCORE':
            return Object.assign({}, state, 0);

        case 'INCREMENT_SCORE':
            return Object.assign({}, state, state + action.n);

        case 'DECREMENT_SCORE':
            return Object.assign({}, state, state - action.n);

        default:
            return state;
    }
};

export default score;