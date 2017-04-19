import Pokemon from '../model/Pokemon';

const BASE_URL = 'http://pokeapi.co/api/v2/';
const POKEMON_URL = 'pokemon/';

export default class PokemonService {
    static getPokemon(pokemonId, ranges) {
        return (!localStorage.getItem(pokemonId)) ?
            this._getPokemon(pokemonId, ranges) : this._getPokemonFromStorage(pokemonId, ranges);
    }

    static _getPokemon(pokemonId, ranges) {
        return fetch(`${BASE_URL}${POKEMON_URL}${pokemonId}/`, {
            method: 'GET',
            cache: 'default'
        })
            .then(function (response) {
                // Convert to JSON
                return response.json();
            })
            .then(function (data) {
                let pokemon = new Pokemon(data, ranges);
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

    static _getPokemonFromStorage(pokemonId, ranges) {
        return new Promise((resolve, reject) => {
            let data = JSON.parse(localStorage.getItem(pokemonId));
            resolve(new Pokemon(data, ranges, true));
        });
    }
}

