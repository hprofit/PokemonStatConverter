import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import setNewPokemon from './actions/Actions';
import PokemonService from './service/PokemonService';
import PokemonDisplay from './PokemonDisplay/PokemonDisplay';

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonId: 0
        };

        this.getPokemon = this.getPokemon.bind(this);
        this.handlePokemonIdChange = this.handlePokemonIdChange.bind(this);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    getPokemon() {
        console.log('Retrieving pokemon...');
        const pokeID = this.state.pokemonId;
        PokemonService.getPokemon(pokeID).then((pokemon) => {
            console.log(pokemon);
            this.props.setNewPokemon(pokemon);
            console.log('Retrieved!');
        })
    }

    handlePokemonIdChange(event) {
        this.setState({pokemonId: event.target.value});
    }

    render() {
        return (
            <div>
                <h1>Pokemon Stat Generator</h1>
                <label>Pokémon ID: </label>
                <input type="number" value={this.state.pokemonId} onChange={this.handlePokemonIdChange}/>
                <button onClick={this.getPokemon}>Get Info</button>
                <PokemonDisplay currentPokemon={this.props.pokemon}/>
            </div>
        );
    }
}

// all this does is map props.init -> state.init, props.hello -> state.hello
function mapStateToProps(state) {
    return {
        pokemon: state.pokemon
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setNewPokemon: function (pokemon) {
            dispatch(setNewPokemon(pokemon));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);