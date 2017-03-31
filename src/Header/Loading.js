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
        //if (this.props.shouldShow) {
            return (
                <img src="../assets/loading.gif" style={STYLES}/>
            );
        //}
        //else {
        //    return null;
        //}
    }
}