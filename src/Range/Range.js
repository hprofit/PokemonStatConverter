import React from 'react';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import {connect} from 'react-redux';
import * as Actions from '../actions/Actions';

class Range extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            min: this.props.ranges[this.props.key].min,
            max: this.props.ranges[this.props.key].max,
            val: this.props.ranges[this.props.key].val
        };

        this._handleMinValueChange = this._handleMinValueChange.bind(this);
        this._handleMaxValueChange = this._handleMaxValueChange.bind(this);
    }

    _updateRange(range) {
        this.props.updateSingleRange(range, this.props.key);
    }

    _handleMinValueChange(event) {
        //this.setState({min: event.target.value});
        this._updateRange({
            min: event.target.value,
            max: this.state.max,
            val: this.state.val
        });
    }

    _handleMaxValueChange(event) {
        //this.setState({max: event.target.value});
        this._updateRange({
            min: this.state.min,
            max: event.target.value,
            val: this.state.val
        });
    }

    _handleValueChange(event) {
        //this.setState({val: event.target.value});
        this._updateRange({
            min: this.state.min,
            max: this.state.max,
            val: event.target.value
        });
    }

    render() {
        const containerStyle = {
            display: 'flex',
            justifyContent: 'space-around'
        };
        return (
            <MenuItem>
                <div style={containerStyle}>
                    <TextField
                        floatingLabelText="Min"
                        type="number" max={parseInt(this.state.max) - 1} min={0}
                        value={this.state.min} style={{width: 150}}
                        onChange={this._handleMinValueChange}
                    />
                    <TextField
                        floatingLabelText="Max"
                        type="number" max={400} min={parseInt(this.state.min) + 1}
                        value={this.state.max} style={{width: 150}}
                        onChange={this._handleMaxValueChange}
                    />
                </div>
            </MenuItem>
        );
    }
}

function mapStateToProps(state) {
    return {
        ranges: state.ranges
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateSingleRange: (range, key) => dispatch(Actions.updateSingleRange(range, key))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Range);