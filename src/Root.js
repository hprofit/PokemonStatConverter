import React from 'react';
import CustomizeRanges from './Ranges/CustomizeRanges';
import PokemonSearch from './Search/PokemonSearch';
import PokemonDisplay from './PokemonDisplay/PokemonDisplay';
import PokemonImage from './PokemonDisplay/PokemonImage';
import Header from './Header/Header';

export default class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const upperContainerStyle = {
            display: 'flex',
            //alignItems: 'center',
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
                    <CustomizeRanges />
                    <PokemonSearch />
                </div>
                <div style={containerStyle}>
                    <PokemonImage />
                    <PokemonDisplay />
                </div>
            </div>
        );
    }
}
