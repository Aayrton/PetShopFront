import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {addPet as addPetActionCreator} from '../actions/petActions';

class AddPet extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addPetAction(this.state);
    this.setState({
      name: '',
      description: ''
    });
  }

  handleNameChange(e) {
    this.setState({name: e.target.value.trim()});
  }

  handleDescriptionChange(e) {
    this.setState({description: e.target.value.trim()});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            hintText="Name"
            onChange={this.handleNameChange}
            />
          <br/>
          <TextField
            hintText="Description"
            multiLine={Boolean(true)}
            rows={2}
            rowsMax={4}
            onChange={this.handleDescriptionChange}
            />
          <RaisedButton type="submit" label="Submit" primary={Boolean(true)}/>
        </form>
      </div>
    );
  }
}

AddPet.propTypes = {
  addPetAction: PropTypes.func.isRequired
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    addPetAction: bindActionCreators(addPetActionCreator, dispatch)
  };
}

const connectAddPet = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPet);

export default connectAddPet;
