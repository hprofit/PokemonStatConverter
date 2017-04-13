import React from 'react';
import PokemonSearch from './Search/PokemonSearch';
import PokemonDisplay from './PokemonDisplay/PokemonDisplay';
import PokemonImage from './PokemonDisplay/PokemonImage';
import Header from './Header/Header';

export default class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const containerStyle = {
            display: 'flex',
            width: 500,
            alignItems: 'center',
            padding: 10
        };
        return (
            <div>
                <Header />
                <PokemonSearch />
                <div style={containerStyle}>
                    <PokemonImage />
                    <PokemonDisplay />
                </div>
            </div>
        );
    }
}
