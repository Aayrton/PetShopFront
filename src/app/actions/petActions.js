  import fetch from 'isomorphic-fetch';
  import {apiUrl} from '../../config.js';
  /* action types */
  export const REQUEST_PETS = 'REQUEST_PETS';
  export const REQUEST_PETS_FAILURE = 'REQUEST_PETS_FAILURE';

  // pet list
  export const FETCH_PETS_SUCCESS = 'FETCH_PETS_SUCCESS';

  // get pet
  export const GET_PET_SUCCESS = 'GET_PET_SUCCESS';

  // create pet
  export const CREATE_PET_SUCCESS = 'CREATE_PET_SUCCESS';

  // update pet
  export const UPDATE_PET_SUCCESS = 'UPDATE_PET_SUCCESS';

  // delete pet
  export const DELETE_PET_SUCCESS = 'DELETE_PET_SUCCESS';

  function fetchParamaters(method = 'GET', body) {
    return {
      method,
      body: JSON.stringify(body)
    };
  }

  /* action creators */
  export function addPet(pet) {
    const requestParams = fetchParamaters('POST', pet);

    return dispatch => {
      dispatch(requestPets());

      return fetch(`${apiUrl}/pets/create`, requestParams)
      .then(response => {
        if (response.status >= 400) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(response => dispatch(addPetSuccess(response)))
      .catch(error => {
        dispatch(requestPetsFailure(error));
      });
    };
  }

  export function fetchPets() {
    return dispatch => {
      dispatch(requestPets());

      return fetch(`${apiUrl}/pets?sort=createdAt DESC`)
      .then(response => {
        if (response.status >= 400) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(response => dispatch(fetchPetSuccess(response)))
      .catch(error => {
        dispatch(requestPetsFailure(error));
      });
    };
  }

  export function getPet(id) {
    return dispatch => {
      dispatch(requestPets());

      return fetch(`${apiUrl}/pets/${id}`)
      .then(response => {
        if (response.status >= 400) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(response => dispatch(getPetSuccess(response)))
      .catch(error => {
        dispatch(requestPetsFailure(error));
      });
    };
  }

  export function updatePet(pet) {
    const requestParams = fetchParamaters('PUT', pet);

    return dispatch => {
      dispatch(requestPets());

      return fetch(`${apiUrl}/pets/${pet.id}`, requestParams)
      .then(response => {
        if (response.status >= 400) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(response => dispatch(updatePetSuccess(response)))
      .catch(error => {
        dispatch(requestPetsFailure(error));
      });
    };
  }

  export function deletePet(id) {
    const requestParams = fetchParamaters('DELETE');

    return dispatch => {
      dispatch(requestPets());

      return fetch(`${apiUrl}/pets/${id}`, requestParams)
      .then(response => {
        if (response.status >= 400) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(response => dispatch(deletePetSuccess(response)))
      .catch(error => {
        dispatch(requestPetsFailure(error));
      });
    };
  }

   /*  request pets actions */
  function requestPets() {
    return {
      type: REQUEST_PETS
    };
  }

  function requestPetsFailure() {
    return {
      type: REQUEST_PETS_FAILURE
    };
  }

  /* create pet actions */
  function addPetSuccess(pet) {
    return {
      type: CREATE_PET_SUCCESS,
      pet
    };
  }

  /*  pet list actions */
  function fetchPetSuccess(pets) {
    return {
      type: FETCH_PETS_SUCCESS,
      pets
    };
  }

  /* get pet action */
  function getPetSuccess(pet) {
    return {
      type: GET_PET_SUCCESS,
      pet
    };
  }

  /* update pet actions */
  function updatePetSuccess(pet) {
    return {
      type: UPDATE_PET_SUCCESS,
      pet
    };
  }

  /* delete pet actions */
  function deletePetSuccess(pet) {
    return {
      type: DELETE_PET_SUCCESS,
      pet
    };
  }
