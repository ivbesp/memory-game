import React, { Component }from 'react';
import {connect} from 'react-redux';
import actions from './../../actions/';
import {bindActionCreators} from 'redux';
import './style/style.scss';

import StartPage from './../StartPage';
import GamePage from './../GamePage';
import EndPage from './../EndPage';

const mapStateToProps = (state) => ({
    state: state

});


// Какие actions будут доступны компоненту
const mapDispatchToProps = (dispatch) => ({
    renderStartPage: bindActionCreators(actions.page.renderStartPage, dispatch),
    renderGamePage:  bindActionCreators(actions.page.renderGamePage, dispatch),
    renderEndPage:   bindActionCreators(actions.page.renderEndPage, dispatch)

});


class Router extends React.Component {
    constructor(props) {
        super(props);
        this._renderStartPage=this._renderStartPage.bind(this);
        this._renderGamePage=this._renderGamePage.bind(this);
        this._renderEndPage=this._renderEndPage.bind(this);
    }

    _renderStartPage(e) {
        e.preventDefault();
        this.props.renderStartPage();
    }

    _renderGamePage(e) {
        e.preventDefault();
        this.props.renderGamePage();
    }

    _renderEndPage(e) {
        e.preventDefault();
        this.props.renderEndPage();
    }

    render() {
        let pageTemplate;
        console.log(this.props.state.page.current);
        switch(this.props.state.page.current) {

            case 'GamePage':
                pageTemplate = <GamePage/>;
                break;

            case 'EndPage':
                pageTemplate = <EndPage/>;
                break;

            default:
                pageTemplate = <StartPage/>;
        }

        return (

            <div className="wrapper">
                <ul className="test_links">
                    <li><a href="#" onClick={this._renderStartPage}>Стартовая страница</a></li>
                    <li><a href="#" onClick={this._renderGamePage}>Игровая страница</a></li>
                    <li><a href="#" onClick={this._renderEndPage}>Конечная страница</a></li>
                </ul>
                {pageTemplate}
            </div>

        )
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(Router);