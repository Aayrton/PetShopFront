import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addPet as addPetActionCreator} from '../actions/petActions';
import PetForm from '../components/petForm';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addPetAction: bindActionCreators(addPetActionCreator, dispatch)
  };
};

const connectPetForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(PetForm);

export default connectPetForm;
