import React from 'react';
import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Loading from './Loading';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return this.props.isLoading ?
            this._renderHeaderWithLoading() : this._renderHeaderWithoutLoading();
    }

    _renderHeaderWithoutLoading() {
        return (
            <AppBar
                title={'Pokémon Stat Generator'}
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                showMenuIconButton={false}
            />
        );
    }

    _renderHeaderWithLoading() {
        return (
            <AppBar
                title={'Pokémon Stat Generator'}
                iconElementRight={<Loading shouldShow={this.props.isLoading}/>}
                showMenuIconButton={false}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.isLoading
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);