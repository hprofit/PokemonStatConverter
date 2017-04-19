import { combineReducers } from 'redux'
import pokemonReducer from './PokemonReducer'

const pokemonApp = combineReducers({
    pokemonReducer
});

export default pokemonApp;