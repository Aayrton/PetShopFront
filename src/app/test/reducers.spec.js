import React from 'react';
import {expect} from 'chai';
import * as types from '../actions/actionTypes';
import reducer from '../reducers/reducers';

let pets = [{
  id: 1,
  name: 'Dog',
  size: 1,
  weight: 40,
  price: 600
},
{
  id: 2,
  name: 'Cat',
  size: 1.5,
  weight: 30,
  price: 300
}
];



describe('pet reducers', () => {
  it('should handle ADD_PET_SUCCESS', () => {

    let firstState = reducer(undefined, {
          type: types.CREATE_PET_SUCCESS,
          pet: pets[0]
        });

    expect(firstState).to.eql({
      status: 1,
      message: 'The pet was successfully added',
      pets: [pets[0]],
      pet: {}
    });

    expect(
      reducer(firstState, {
        type: types.CREATE_PET_SUCCESS,
        pet: pets[1]
      })
    ).to.eql({
      status: 1,
      message: 'The pet was successfully added',
      pets: [pets[1], pets[0]],
      pet: {}
    });
  });

  it('should handle FETCH_PET_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: types.FETCH_PETS_SUCCESS,
        pets: pets
      })
    ).eql({
      status: 1,
      message: '',
      pets: pets,
      pet: {}
    });
  })
});
