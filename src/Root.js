import React from 'react';
import PokemonSearch from './Search/PokemonSearch';
import PokemonDisplay from './PokemonDisplay/PokemonDisplay';
import PokemonImage from './PokemonDisplay/PokemonImage';
import Header from './Header/Header';
import Paper from 'material-ui/Paper';

export default class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center',
            display: 'inline-block'
        };
        return (
            <Paper style={style} zDepth={1}>
                <Header />
                <PokemonSearch />
                <PokemonImage style="display: inline-block;" />
                <PokemonDisplay style="display: inline-block;" />
            </Paper>
        );
    }
}
