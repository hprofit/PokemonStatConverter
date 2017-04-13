import React from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';

class PokemonImage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.currentPokemon) {
            const style = {
                marginRight: 10,
                display: 'flex'
            };
            const imgStyle = {
                alignSelf: 'center'
            };
            const pokemon = this.props.currentPokemon;
            return (
                <Paper style={style} zDepth={2}>
                    <img src={pokemon.getImageUrl()} style={imgStyle} />
                </Paper>
            );
        }
        else {
            return null;
        }
    }
}

function mapStateToProps(state) {
    return {
        currentPokemon: state.pokemon
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonImage);