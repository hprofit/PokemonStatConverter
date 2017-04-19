import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import * as Actions from '../actions/Actions';
import PokemonService from '../service/PokemonService';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const MIN_POKE_ID = 1;
//const MAX_POKE_ID = 802;
const MAX_POKE_ID = 721;

class PokemonSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonId: 1
        };

        this.getPokemon = this.getPokemon.bind(this);
        this.handlePokemonIdChange = this.handlePokemonIdChange.bind(this);
        this.verifyPokemonIdIsValid = this.verifyPokemonIdIsValid.bind(this);
    }

    getPokemon() {
        const pokeID = this.state.pokemonId;

        this.props.setIsLoading(true);
        PokemonService.getPokemon(pokeID, this.props.ranges)
            .then((pokemon) => {
                this.props.setIsLoading(false);
                this.props.setNewPokemon(pokemon);
            });
    }

    handlePokemonIdChange(event) {
        this.setState({pokemonId: event.target.value});
    }

    verifyPokemonIdIsValid() {
        return MIN_POKE_ID <= this.state.pokemonId && this.state.pokemonId <= MAX_POKE_ID;
    }

    render() {
        const style = {
            marginLeft: 12
        };
        const containerStyle = {
            padding: 10
        };

        return (
            <div style={containerStyle}>
                <TextField
                    floatingLabelText="Pokémon ID (1-721)"
                    type="number" max={MAX_POKE_ID} min={MIN_POKE_ID}
                    value={this.state.pokemonId}
                    onChange={this.handlePokemonIdChange}
                />
                <RaisedButton
                    label="Get Info"
                    disabled={!this.verifyPokemonIdIsValid() || this.props.isLoading}
                    primary={true} style={style}
                    onClick={this.getPokemon}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.isLoading,
        ranges: state.ranges
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setNewPokemon: (pokemon) => dispatch(Actions.setNewPokemon(pokemon)),
        setIsLoading: (isLoading) => dispatch(Actions.setIsLoading(isLoading))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonSearch);