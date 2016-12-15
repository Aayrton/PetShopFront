import {
  FETCH_PETS, FETCH_PETS_SUCCESS, FETCH_PETS_FAILURE,
  CREATE_PET, CREATE_PET_SUCCESS, CREATE_PET_FAILURE,
  DELETE_PET, DELETE_PET_SUCCESS, DELETE_PET_FAILURE
} from '../actions/petActions';
import {without} from 'lodash';

const initialState = {
  isFetching: false,
  failure: false,
  pets: []
};

function petApp(state = initialState, action) {
  switch (action.type) {
    case FETCH_PETS:
      return Object.assign({}, state, {
        isFetching: true
      });

    case FETCH_PETS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        failure: false,
        pets: action.pets
      });

    case FETCH_PETS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        failure: true,
        message: action.error
      });

    case CREATE_PET:
      return Object.assign({}, state, {
        isFetching: true
      });

    case CREATE_PET_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        failure: false,
        pets: [action.pet, ...state.pets]
      });

    case CREATE_PET_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        failure: true,
        message: action.error
      });

    case DELETE_PET:
      return Object.assign({}, state, {
        isFetching: true
      });

    case DELETE_PET_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        failure: false,
        pets: without([...state.pets], action.pet)
      });

    case DELETE_PET_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        failure: true,
        message: action.error
      });

    default:
      return state;
  }
}

export default petApp;
