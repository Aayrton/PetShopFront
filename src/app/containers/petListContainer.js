import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deletePet as deletePetActionCreator} from '../actions/petActions';
import PetList from '../components/petList';

const mapStateToProps = state => {
  return {
    pets: state.pets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePet: bindActionCreators(deletePetActionCreator, dispatch)
  };
};

const petListConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(PetList);

export default petListConnect;
