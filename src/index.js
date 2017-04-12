import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import pokemonReducer from './reducers/Pokemon';
import Root from './Root';
import COLORS from './Colors';
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as mui from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


const pokemonTheme = getMuiTheme({
    palette: {
        primary1Color: COLORS.PURPLE,
        //primary2Color: '#ED1C24',
        //primary3Color: '#ED1C24',
        //accent1Color: '#ED1C24',
        //accent2Color: '#ED1C24',
        //accent3Color: '#ED1C24',
        textColor: '#000000',
        alternateTextColor: '#ffffff',
        //canvasColor: '#ED1C24',
        borderColor: COLORS.PURPLE,
        disabledColor: '#000000',
        //pickerHeaderColor: '#ED1C24',
        //clockCircleColor: '#ED1C24',
        //shadowColor: '#ED1C24'
    }
});

let store = createStore(pokemonReducer);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={pokemonTheme}>
            <Root />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);