import React from 'react';
import PokemonSearch from './Search/PokemonSearch';
import PokemonDisplay from './PokemonDisplay/PokemonDisplay';
import PokemonImage from './PokemonDisplay/PokemonImage';
import RangeEditorContainer from './Range/RangeEditorContainer';
import Header from './Header/Header';
import {connect} from 'react-redux';
import * as Actions from './actions/Actions';

class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let ranges = {
            '1': {min: 0, max: 10, val: -2},
            '2': {min: 11, max: 39, val: -1},
            '3': {min: 40, max: 64, val: 0},
            '4': {min: 65, max: 79, val: 1},
            '5': {min: 80, max: 99, val: 2},
            '6': {min: 100, max: 119, val: 3},
            '7': {min: 120, max: 149, val: 4},
            '8': {min: 150, max: 400, val: 5}
        };
        this.props.updateRanges(ranges);
    }

    render() {
        const upperContainerStyle = {
            display: 'flex',
            alignItems: 'center',
            padding: 10
        };
        const containerStyle = {
            display: 'flex',
            width: 500,
            alignItems: 'center',
            padding: 10
        };
        return (
            <div>
                <Header />
                <div style={upperContainerStyle}>
                    <PokemonSearch />
                    <RangeEditorContainer />
                </div>
                <div style={containerStyle}>
                    <PokemonImage />
                    <PokemonDisplay />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        setIsLoading: (isLoading) => dispatch(Actions.setIsLoading(isLoading)),
        updateRanges: (ranges) => dispatch(Actions.updateRanges(ranges))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);