import InitialState from './../initialstate';

export const page = (state = InitialState.page, action) => {
    switch(action.type) {
        case 'RENDER_STARTPAGE':
            return Object.assign({},state,{current: 'StartPage'});

        case 'RENDER_GAMEPAGE':
            return Object.assign({},state,{current: 'GamePage'});

        case 'RENDER_ENDPAGE':
            return Object.assign({},state,{current: 'EndPage'});

        default:
            return state;
    }
};

export default page;