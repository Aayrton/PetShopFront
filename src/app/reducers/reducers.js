import {
  REQUEST_PETS, REQUEST_PETS_FAILURE, FETCH_PETS_SUCCESS,
  CREATE_PET_SUCCESS, DELETE_PET_SUCCESS, UPDATE_PET_SUCCESS,
  GET_PET_SUCCESS
} from '../actions/petActions';

const initialState = {
  isFetching: false,
  failure: false,
  pets: [],
  pet: {}
};

function petApp(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PETS:
      return Object.assign({}, state, {
        isFetching: true
      });

    case REQUEST_PETS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        failure: true,
        message: action.error
      });

    case FETCH_PETS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        failure: false,
        pets: action.pets
      });

    case GET_PET_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        failure: false,
        pet: action.pet
      });

    case CREATE_PET_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        failure: false,
        pets: [action.pet, ...state.pets]
      });

    case UPDATE_PET_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        failure: false,
        pet: action.pet
      });

    case DELETE_PET_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        failure: false,
        pets: [...state.pets].filter(pet => {
          return pet.id !== action.pet.id;
        })
      });

    default:
      return state;
  }
}

export default petApp;
