import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {setNewPokemon} from './actions/Actions';
import PokemonService from './service/PokemonService';
import PokemonSearch from './Search/PokemonSearch';
import PokemonDisplay from './PokemonDisplay/PokemonDisplay';
import PokemonImage from './PokemonDisplay/PokemonImage';
import Header from './Header/Header';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <PokemonSearch />
                <PokemonImage />
                <PokemonDisplay />
            </div>
        );
    }
}
