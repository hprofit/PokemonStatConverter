import ACTION_TYPES from  '../actions/ActionTypes'

const pokemonReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_NEW_POKEMON:
            return {
                pokemon: action.pokemon
            };
        default:
            return state
    }
};

export default pokemonReducer