import React, { Component }from 'react';
import {connect} from 'react-redux';
import actions from './../../actions/';
import {bindActionCreators} from 'redux';
import './style/style.scss';

import StartPage from './../StartPage';
import GamePage from './../GamePage';
import EndPage from './../EndPage';

const mapStateToProps = (state) => ({
    RouterState: state.page

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
    }

    _renderStartPage() {
        this.props.renderStartPage();
    }

    _renderGamePage() {
        this.props.renderGamePage();
    }

    _renderEndPage() {
        this.props.renderEndPage();
    }

    render() {
        let pageTemplate;
        console.log(this.props.RouterState);
        switch(this.props.RouterState) {

            case 'game-page':
                pageTemplate = <GamePage/>;
                break;

            case 'end-page':
                pageTemplate = <EndPage/>;
                break;

            default:
                pageTemplate = <StartPage/>;
        }

        return (

            <div className="wrapper">
                {pageTemplate}
            </div>

        )
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(Router);