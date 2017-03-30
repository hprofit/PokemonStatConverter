import ACTION_TYPES from './ActionTypes'

const setNewPokemon = (pokemon) => {
    return {
        type: ACTION_TYPES.SET_NEW_POKEMON,
        pokemon
    }
};

export default setNewPokemon;