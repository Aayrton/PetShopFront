import {
  REQUEST_PETS, REQUEST_PETS_FAILURE, FETCH_PETS_SUCCESS,
  CREATE_PET_SUCCESS, DELETE_PET_SUCCESS, UPDATE_PET_SUCCESS,
  GET_PET_SUCCESS
} from '../actions/typeActions';

const initialState = {
  isFetching: false,
  status: 0,
  message: '',
  pets: [],
  pet: {}
};

function petApp(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PETS:
      return Object.assign({}, state, {
        status: 0
      });

    case REQUEST_PETS_FAILURE:
      return Object.assign({}, state, {
        status: -1,
        message: action.error
      });

    case FETCH_PETS_SUCCESS:
      return Object.assign({}, state, {
        status: 1,
        pets: action.pets
      });

    case GET_PET_SUCCESS:
      return Object.assign({}, state, {
        status: 1,
        pet: action.pet
      });

    case CREATE_PET_SUCCESS:
      return Object.assign({}, state, {
        status: 1,
        message: 'The pet was successfully added',
        pets: [action.pet, ...state.pets]
      });

    case UPDATE_PET_SUCCESS:
      return Object.assign({}, state, {
        status: 1,
        message: 'The pet was successfully updated',
        pet: action.pet
      });

    case DELETE_PET_SUCCESS:
      return Object.assign({}, state, {
        status: 1,
        message: 'The pet was successfully deleted',
        pets: [...state.pets].filter(pet => {
          return pet.id !== action.pet.id;
        })
      });

    default:
      return state;
  }
}

export default petApp;
