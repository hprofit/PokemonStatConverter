import ACTION_TYPES from  '../actions/ActionTypes'

const pokemonReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_NEW_POKEMON:
            return {
                pokemon: action.pokemon
            };
        case ACTION_TYPES.SET_IS_LOADING:
            return {
                isLoading: action.isLoading
            };
        default:
            return state
    }
};

export default pokemonReducer