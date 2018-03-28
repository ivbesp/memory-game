import InitialState from './../initialstate';

export const cards = (state = InitialState.cards, action) => {
    switch(action.type) {
        case 'SET_CARDS':
            return Object.assign({}, state, action.cards);

        case 'OPEN_ALL_CARDS':
            return Object.assign({}, state, state.map(
                (item)=>Object.assign({}, item, {isOpened: true})
            ));

        case 'CLOSE_ALL_CARDS':
            return Object.assign({}, state, state.map(
                (item)=> Object.assign({}, item, {isOpened: false})
            ));

        case 'FLIP_CARD':
            return Object.assign({}, state, state.map(
                (item)=>{
                    let card = (item.id == action.id)?
                        Object.assign({}, item, {isOpened: !item.isOpened}):item;
                    return card;
                }
            ));

        case 'GUESS_CARD':
            return Object.assign({}, state, state.map(
                (item)=>{
                    let card = (item.type == action.card_type)?
                        Object.assign({}, item, {isGuessed: true}):item;
                    return card;
            }));

        default:
            return state;
    }
};

export default cards;