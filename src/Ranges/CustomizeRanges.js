import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../actions/Actions';
import PokemonService from '../service/PokemonService';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class CustomizeRanges extends React.Component {
    constructor(props) {
        super(props);

        this.startEditing = this.startEditing.bind(this);
        this.stopEditing = this.stopEditing.bind(this);
    }

    startEditing() {
        this.props.setEditingCustomRanges(true);
    }

    stopEditing() {
        this.props.setEditingCustomRanges(false);
    }

    render() {
        return this.props.isEditing ? this._renderEditor() : this._renderStartEditing();
    }

    _renderStartEditing() {
        const buttonStyle = {
            marginLeft: 12,
            marginBottom: 12
        };
        return (
            //<Paper style={containerStyle} zDepth={2}>
            <RaisedButton
                label="Edit Ranges"
                disabled={this.props.isLoading}
                primary={true} style={buttonStyle}
                onClick={this.startEditing}
            />
            //</Paper>
        );
    }

    _renderEditor() {
        const containerStyle = {
            width: 400,
            marginLeft: 10,
            textAlign: 'center',
            display: 'inline-block'
        };
        const buttonStyle = {
            marginLeft: 12,
            marginBottom: 12
        };
        return (
            <Paper style={containerStyle} zDepth={2}>
                <RaisedButton
                    label="Stop Editing"
                    primary={true} style={buttonStyle}
                    onClick={this.stopEditing}
                />
                <Table>
                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                    >
                        <TableRow>
                            <TableHeaderColumn>Actions</TableHeaderColumn>
                            <TableHeaderColumn>Low Value</TableHeaderColumn>
                            <TableHeaderColumn>High Value</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={false}
                    >
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

function mapStateToProps(state) {
    return {
        isEditing: state.isEditing,
        isLoading: state.isLoading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setNewCustomRanges: (ranges) => dispatch(Actions.setNewCustomRanges(ranges)),
        setEditingCustomRanges: (isEditing) => dispatch(Actions.setEditingCustomRanges(isEditing))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomizeRanges);