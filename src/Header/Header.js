import React from 'react';
import AppBar from 'material-ui/AppBar';
import Loading from './Loading';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return this.props.isLoading ?
            this._renderHeaderWithLoading() : this._renderHeaderWithoutLoading();
    }

    _renderHeaderWithoutLoading () {
        return (
            <AppBar
                title={'Pokemon Stat Generator'}
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                showMenuIconButton={false}
            />
        );
    }

    _renderHeaderWithLoading() {
        return (
            <AppBar
                title={'Pokemon Stat Generator'}
                iconElementRight={<Loading shouldShow={this.props.isLoading}/>}
                showMenuIconButton={false}
            />
        );
    }
}