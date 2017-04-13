import React from 'react';
import {connect} from 'react-redux';

class PokemonImage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.currentPokemon) {
            const pokemon = this.props.currentPokemon;
            return (
                <div>
                    <img src={pokemon.getImageUrl()} />
                </div>
            );
        }
        else {
            return null;
        }
    }
}

function mapStateToProps(state) {
    return {
        currentPokemon: state.pokemon
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonImage);