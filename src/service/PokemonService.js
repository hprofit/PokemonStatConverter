import Pokemon from '../model/Pokemon';

const BASE_URL = 'http://pokeapi.co/api/v2/';
const POKEMON_URL = 'pokemon/';

export default class PokemonService {
    static getPokemon(pokemonId) {
        return (!localStorage.getItem(pokemonId)) ?
            this._getPokemon(pokemonId) : this._getPokemonFromStorage(pokemonId);
    }

    static _getPokemon(pokemonId) {
        return fetch(`${BASE_URL}${POKEMON_URL}${pokemonId}/`, {
            method: 'GET',
            cache: 'default'
        })
            .then(function (response) {
                // Convert to JSON
                return response.json();
            })
            .then(function (data) {
                let pokemon = new Pokemon(data);
                try {
                    localStorage.setItem(pokemonId, JSON.stringify(pokemon.toJSON()));
                }
                catch (e) {
                    console.log('Quota exceeded!');
                }
                return pokemon;
            })
            .catch((error) => console.log(error));
    }

    static _getPokemonFromStorage(pokemonId) {
        return new Promise((resolve, reject) => {
            let data = JSON.parse(localStorage.getItem(pokemonId));
            resolve(new Pokemon(data, true));
        });
    }
}

