import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Range from './Range';
import {connect} from 'react-redux';
import * as Actions from '../actions/Actions';

class RangeConverter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
        this._handleToggle = this._handleToggle.bind(this);
        this._handleClose = this._handleClose.bind(this);
    }

    _handleToggle() {
        this.setState({open: !this.state.open});
    }

    _handleClose() {
        this.setState({open: false});
    }

    render() {
        if (this.props.ranges) {
            const ranges = this.props.ranges;
            const rangesArray = [];
            for (let key in ranges) {
                if (ranges.hasOwnProperty(key)) {
                    rangesArray.push(ranges[key]);
                }
            }
            rangesArray
            const rangesElements = ranges
            style = {
                marginLeft: 12,
                marginTop: 28
            };
            return (
                <div>
                    <RaisedButton
                        label="Customize Ranges"
                        primary={true} style={style}
                        onTouchTap={this._handleToggle}
                    />

                    <Drawer
                        open={this.state.open} docked={false}
                        width={400} onRequestChange={(open) => this.setState({open})}
                    >
                        <MenuItem>
                            <RaisedButton
                                label="Close"
                                primary={true}
                                onTouchTap={this._handleToggle}
                            />
                            <RaisedButton
                                label="Save"
                                primary={true}
                                onTouchTap={this._handleToggle}
                            />
                        </MenuItem>
                        <Range key={'1'}/>
                    </Drawer>
                </div>
            );
        }
        else {
            return null;
        }
    }
}

function mapStateToProps(state) {
    return {
        ranges: state.ranges
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(RangeConverter);