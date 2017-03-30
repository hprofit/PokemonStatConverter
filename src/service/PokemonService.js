import Pokemon from '../model/Pokemon';

const BASE_URL = 'http://pokeapi.co/api/v2/';
const POKEMON_URL = 'pokemon/';

export default class PokemonService {
    static getPokemon(pokemon) {
        return fetch(`${BASE_URL}${POKEMON_URL}${pokemon}/`, {
            method: 'GET',
            cache: 'default'
        }).then(function (response) {
            // Convert to JSON
            return response.json();
        }).then(function (data) {
                console.log(data);
                return new Pokemon(data)
            })
            .catch((error) => console.log(error));
    }
}

