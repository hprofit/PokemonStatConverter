import ACTION_TYPES from  '../actions/ActionTypes'

const pokemonReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_NEW_POKEMON:
            return Object.assign({}, state, {
                pokemon: action.pokemon
            });
        case ACTION_TYPES.SET_IS_LOADING:
            return Object.assign({}, state, {
                isLoading: action.isLoading
            });

        case ACTION_TYPES.UPDATE_RANGES:
            return Object.assign({}, state, {
                ranges: action.ranges
            });
        case ACTION_TYPES.UPDATE_SINGLE_RANGE:
            let ranges = Object.assign({}, state.ranges);
            ranges[action.key] = action.range;
            return Object.assign({}, state, {
                ranges: ranges
            });
        default:
            return state;
    }
};

export default pokemonReducer