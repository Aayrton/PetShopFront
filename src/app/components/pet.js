import React, {PropTypes} from 'react';
// import FlatButton from 'material-ui/FlatButton';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import FloatingActionButton from 'material-ui/FloatingActionButton';

class Pet extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick() {
    console.log('click');
    this.props.deletePet(this.props.id);
  }

  render() {
    return (
      <TableRow>
        <TableRowColumn>{this.props.id}</TableRowColumn>
        <TableRowColumn>{this.props.name}</TableRowColumn>
        <TableRowColumn>{this.props.description}</TableRowColumn>
        <TableRowColumn>
          <FloatingActionButton
            mini={Boolean(true)}
            secondary={Boolean(true)}
            onClick={this.handleDeleteClick}
            >
            <DeleteForever/>
          </FloatingActionButton>
          <FloatingActionButton
            mini={Boolean(true)}
            default={Boolean(true)}
            >
            <ModeEdit/>
          </FloatingActionButton>
        </TableRowColumn>
      </TableRow>
    );
  }
}

Pet.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  deletePet: PropTypes.func.isRequired
};

export default Pet;
