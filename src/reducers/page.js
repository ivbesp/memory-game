import InitialState from './../initialstate';

export const PageReducer = (state = InitialState.page, action) => {
    switch(action.type) {
        case 'RENDER_STARTPAGE':
            return Object.assign({},state,'StartPage');

        case 'RENDER_GAMEPAGE':
            return Object.assign({},state,'GamePage');

        case 'RENDER_ENDPAGE':
            return Object.assign({},state,'EndPage');

        default:
            return state;
    }
};

export default PageReducer;