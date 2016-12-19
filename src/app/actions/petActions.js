  import fetch from 'isomorphic-fetch';
  import {apiUrl} from '../../config.js';
  import * as types from './actionTypes';
  import Pet from '../models/pet';

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

      return fetch(`${apiUrl}/pets`, requestParams)
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

      return fetch(`${apiUrl}/pets?sort=id DESC`)
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
  export function requestPets() {
    return {
      type: types.REQUEST_PETS
    };
  }

  export function requestPetsFailure(error) {
    return {
      type: types.REQUEST_PETS_FAILURE,
      error
    };
  }

  /* create pet actions */
  export function addPetSuccess(pet) {
    return {
      type: types.CREATE_PET_SUCCESS,
      pet: new Pet(pet)
    };
  }

  /*  pet list actions */
  export function fetchPetSuccess(pets) {
    return {
      type: types.FETCH_PETS_SUCCESS,
      pets
    };
  }

  /* get pet action */
  export function getPetSuccess(pet) {
    return {
      type: types.GET_PET_SUCCESS,
      pet
    };
  }

  /* update pet actions */
  export function updatePetSuccess(pet) {
    return {
      type: types.UPDATE_PET_SUCCESS,
      pet
    };
  }

  /* delete pet actions */
  export function deletePetSuccess(pet) {
    return {
      type: types.DELETE_PET_SUCCESS,
      pet
    };
  }
