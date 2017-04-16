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

export const setNewCustomRanges = (ranges) => {
    return {
        type: ACTION_TYPES.SET_NEW_CUSTOM_RANGES,
        ranges
    }
};

export const setEditingCustomRanges = (isEditing) => {
    return {
        type: ACTION_TYPES.SET_EDITING_CUSTOM_RANGES,
        isEditing
    }
};