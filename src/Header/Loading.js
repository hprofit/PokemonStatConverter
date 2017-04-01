import React from 'react';

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
            //<img src="../pmdTTRPG/assets/loading.gif" style={STYLES}/>
            <img src="../assets/loading.gif" style={STYLES}/>
        );
    }
}