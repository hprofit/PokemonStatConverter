import React from 'react';
import Paper from 'material-ui/Paper';

export default class PokemonTypeDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            height: 46
        };
        const pokemon = this.props.pokemon;

        if (pokemon.TYPE2) {
            return (
                <Paper style={style} zDepth={2}>
                    <img src={pokemon.getTypeImageUrl(pokemon.TYPE1)}/>
                    <img src={pokemon.getTypeImageUrl(pokemon.TYPE2)}/>
                </Paper>
            );
        }
        else {
            return (
                <Paper style={style} zDepth={2}>
                    <img src={pokemon.getTypeImageUrl(pokemon.TYPE1)}/>
                </Paper>
            );
        }
    }
}