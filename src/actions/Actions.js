import ACTION_TYPES from './ActionTypes'

export const setNewPokemon = (pokemon) => {
    return {
        type: ACTION_TYPES.SET_NEW_POKEMON,
        pokemon
    }
};

export const setIsLoading = (isLoading) => {
    return {
        type: ACTION_TYPES.SET_IS_LOADING,
        isLoading
    }
};


export const updateRanges = (ranges) => {
    return {
        type: ACTION_TYPES.UPDATE_RANGES,
        ranges
    }
};

export const updateSingleRange = (key, range) => {
    return {
        type: ACTION_TYPES.UPDATE_SINGLE_RANGE,
        key,
        range
    }
};