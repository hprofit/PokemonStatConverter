import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import RangeEditor from './RangeEditor';
import {connect} from 'react-redux';
import * as Actions from '../actions/Actions';

class RangeEditorContainer extends React.Component {
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
            let rangesArray = [];
            for (let key in ranges) {
                if (ranges.hasOwnProperty(key)) {
                    rangesArray.push(ranges[key]);
                }
            }
            rangesArray.sort(function (a, b) {
                return a.val < b.val ? -1 : 1;
            });
            const rangesElements = rangesArray.map((range, idx) => {
                return (
                    <RangeEditor rangeKey={idx+1} key={idx} />
                );
            });
            const style = {
                marginLeft: 12,
                marginTop: 28
            };
            const drawerButtonContainerStyle = {
                display: 'flex',
                justifyContent: 'space-around'
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
                        width={500} onRequestChange={(open) => this.setState({open})}
                    >
                        <MenuItem>
                            <div style={drawerButtonContainerStyle}>
                                <RaisedButton
                                    label="Close"
                                    onTouchTap={this._handleToggle}
                                />
                                <RaisedButton
                                    label="Save"
                                    primary={true}
                                    onTouchTap={this._handleToggle}
                                />
                            </div>
                        </MenuItem>
                        {rangesElements}
                    </Drawer>
                </div>
            );
            //<Range key={'1'}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(RangeEditorContainer);