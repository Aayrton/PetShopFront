import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updatePet as updatePetActionCreator} from '../actions/petActions';
import UpdatePage from '../components/updatePage';

const getPetById = (pets, id) => {
  const pet = pets.filter(pet => pet.id === id);
  return pet.length ? pet[0] : null;
};

const mapStateToProps = (state, ownProps) => {
  const petId = Number(ownProps.params.petId);
  console.log('petId: ', petId);
  let pet = {};

  if (petId && state.pets.length > 0) {
    pet = getPetById(state.pets, petId);
  }

  console.log('pet: ', pet);

  return {
    pet
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updatePet: bindActionCreators(updatePetActionCreator, dispatch)
  };
};

const connectUpdatePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdatePage);

export default connectUpdatePage;
