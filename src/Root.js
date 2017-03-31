import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import setNewPokemon from './actions/Actions';
import PokemonService from './service/PokemonService';
import PokemonDisplay from './PokemonDisplay/PokemonDisplay';
import Header from './Header/Header';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const MIN_POKE_ID = 1;
const MAX_POKE_ID = 802;

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonId: 1,
            isLoading: false
        };

        this.getPokemon = this.getPokemon.bind(this);
        this.handlePokemonIdChange = this.handlePokemonIdChange.bind(this);
    }

    getPokemon() {
        const pokeID = this.state.pokemonId;
        this.setState({isLoading: true});
        PokemonService.getPokemon(pokeID).then((pokemon) => {
            this.setState({isLoading: false});
            this.props.setNewPokemon(pokemon);
        })
    }

    handlePokemonIdChange(event) {
        this.setState({pokemonId: event.target.value});
    }

    render() {
        const style = {
            margin: 12
        };

        return (
            <div>
                <Header isLoading={this.state.isLoading} />
                <TextField
                    floatingLabelText="Pokémon ID (1-802)"
                    type="number"
                    value={this.state.pokemonId}
                    onChange={this.handlePokemonIdChange}
                />
                <RaisedButton label="Get Info" primary={true} style={style} onClick={this.getPokemon} />
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