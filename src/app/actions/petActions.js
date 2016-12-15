  import fetch from 'isomorphic-fetch';
  /* action types */

  // pet list
  export const FETCH_PETS = 'FETCH_PETS';
  export const FETCH_PETS_SUCCESS = 'FETCH_PETS_SUCCESS';
  export const FETCH_PETS_FAILURE = 'FETCH_PETS_FAILURE';

  // create pet
  export const CREATE_PET = 'CREATE_PET';
  export const CREATE_PET_SUCCESS = 'CREATE_PET_SUCCESS';
  export const CREATE_PET_FAILURE = 'CREATE_PET_FAILURE';

  // update pet
  export const UPDATE_PET = 'UPDATE_PET';
  export const UPDATE_PET_SUCCESS = 'UPDATE_PET_SUCCESS';
  export const UPDATE_PET_FAILURE = 'UPDATE_PET_FAILURE';

  // delete pet
  export const DELETE_PET = 'DELETE_PET';
  export const DELETE_PET_SUCCESS = 'DELETE_PET_SUCCESS';
  export const DELETE_PET_FAILURE = 'DELETE_PET_FAILURE';

  const API_URL = 'http://localhost:1337';

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
      dispatch(requestAddPet());

      return fetch(`${API_URL}/pets/create`, requestParams)
      .then(response => {
        if (response.status >= 400) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(response => dispatch(addPetSuccess(response)))
      .catch(error => {
        dispatch(addPetFailure(error));
      });
    };
  }

  export function fetchPets() {
    return dispatch => {
      dispatch(requestPets());

      return fetch(`${API_URL}/pets?sort=createdAt DESC`)
      .then(response => {
        if (response.status >= 400) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(response => dispatch(fetchPetSuccess(response)))
      .catch(error => {
        dispatch(fetchPetFailure(error));
      });
    };
  }

  export function updatePet() {
    return dispatch => {
      dispatch(requestUpdatePet());

      return fetch(`${API_URL}/pets/update`)
      .then(response => {
        if (response.status >= 400) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(response => dispatch(updatePetSuccess(response)))
      .catch(error => {
        dispatch(updatePetFailure(error));
      });
    };
  }

  export function deletePet(id) {
    const requestParams = fetchParamaters('DELETE');

    return dispatch => {
      dispatch(requestDeletePet());

      return fetch(`${API_URL}/pets/${id}`, requestParams)
      .then(response => {
        if (response.status >= 400) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(response => dispatch(deletePetSuccess(response)))
      .catch(error => {
        dispatch(deletePetFailure(error));
      });
    };
  }

  /* create pet actions */
  function requestAddPet() {
    return {
      type: CREATE_PET
    };
  }

  function addPetSuccess(pet) {
    return {
      type: CREATE_PET_SUCCESS,
      pet
    };
  }

  function addPetFailure(error) {
    return {
      type: CREATE_PET_FAILURE,
      error
    };
  }

  /*  pet list actions */
  function requestPets() {
    return {
      type: FETCH_PETS
    };
  }

  function fetchPetSuccess(pets) {
    return {
      type: FETCH_PETS_SUCCESS,
      pets
    };
  }

  function fetchPetFailure(error) {
    return {
      type: FETCH_PETS_FAILURE,
      error
    };
  }

  /* update pet actions */
  function requestUpdatePet() {
    return {
      type: UPDATE_PET
    };
  }

  function updatePetSuccess(pet) {
    return {
      type: UPDATE_PET_SUCCESS,
      pet
    };
  }

  function updatePetFailure(error) {
    return {
      type: UPDATE_PET_FAILURE,
      error
    };
  }

  /* delete pet actions */
  function requestDeletePet() {
    return {
      type: DELETE_PET
    };
  }

  function deletePetSuccess(pet) {
    return {
      type: DELETE_PET_SUCCESS,
      pet
    };
  }

  function deletePetFailure(error) {
    return {
      type: DELETE_PET_FAILURE,
      error
    };
  }
