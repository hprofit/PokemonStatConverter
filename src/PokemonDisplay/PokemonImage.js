//http://bulbapedia.bulbagarden.net/wiki/File:471Glaceon.png


import React from 'react';

export default class PokemonImage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.currentPokemon) {
            const pokemon = this.props.currentPokemon;
            return (
                <div>
                </div>
            );
        }
        else {
            return null;
        }
    }
}