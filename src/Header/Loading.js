import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import COLORS from '../Colors';

const STYLES = {
    width: '40px',
    height: '40px'
};

export default class Loading extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CircularProgress size={60} thickness={7} color={COLORS.PINK}/>
        );
    }
}