import React, { Component }from 'react';


import './style/style.scss';


class StartPage extends Component {
    constructor (props) {
        super(props);
    }

    render () {

        return (
            <div className='start-page'>
                <img className='start-page__img' src="/img/StartGame.png" alt=""/>
                <div className='start-page__title'>MEMORY GAME</div>
                <a className='start-page__button' href="#">Начать игру</a>
            </div>
        );
    }
}

export default StartPage;


