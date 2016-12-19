import React from 'react';
import * as actions from '../actions/petActions';
import {expect} from 'chai';
import * as types from '../actions/actionTypes';
import configStore from '../store/configStore';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetch from 'isomorphic-fetch';
import {apiUrl} from '../../config.js';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

let pet = {
    id: 1,
    name: 'Dog',
    size: 1,
    weight: 40,
    price: 600
};

// Clean database
fetch(`${apiUrl}/pets/deleteAll`)
  .then(response => {
    if (response.status >= 400) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then(response => {console.log('Success cleaning database: ', response)})
  .catch(error => {console.log('Error cleaning database: ', error)});


describe('pets actions', () => {
    it('it create CREATE_PET_SUCCESS after addPet has been done', () => {
      const expectedActions = [
        { type: types.REQUEST_PETS },
        { type: types.CREATE_PET_SUCCESS, pet }
      ];

      const store = mockStore({});

      return store.dispatch(actions.addPet(pet))
        .then(() => {
          expect(store.getActions()).to.deep.equal(expectedActions);
        })
    });

    it('it create FETCH_PET_SUCCESS after fetchPets has been done', () => {
      const expectedActions = [
        { type: types.REQUEST_PETS },
        { type: types.FETCH_PETS_SUCCESS, pets: [pet] }
      ];

      const store = mockStore({});

      return store.dispatch(actions.fetchPets())
        .then(() => {
          expect(store.getActions()).to.deep.equal(expectedActions);
        })
    });

    it('it create GET_PET_SUCCESS after getPet has been done', () => {
      const expectedActions = [
        { type: types.REQUEST_PETS },
        { type: types.GET_PET_SUCCESS, pet }
      ];

      const store = mockStore({});

      return store.dispatch(actions.getPet(pet.id))
        .then(() => {
          expect(store.getActions()).to.deep.equal(expectedActions);
        })
    });

    it('it create UPDATE_PET_SUCCESS after updatePet has been done', () => {
      pet.name = 'Cat';

      const expectedActions = [
        { type: types.REQUEST_PETS },
        { type: types.UPDATE_PET_SUCCESS, pet }
      ];

      const store = mockStore({});

      return store.dispatch(actions.updatePet(pet))
        .then(() => {
          expect(store.getActions()).to.deep.equal(expectedActions);
        })
    });

    it('it create DELETE_PET_SUCCESS after deletePet has been done', () => {
      const expectedActions = [
        { type: types.REQUEST_PETS },
        { type: types.DELETE_PET_SUCCESS, pet }
      ];

      const store = mockStore({});

      return store.dispatch(actions.deletePet(pet.id))
        .then(() => {
          expect(store.getActions()).to.deep.equal(expectedActions);
        })
    });

});
