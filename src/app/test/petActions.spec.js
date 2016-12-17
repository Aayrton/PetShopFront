import React from 'react';
import * as actions from '../actions/petActions';
import {expect} from 'chai';
import * as types from '../actions/typeActions';

let pet = {
  name: 'Cat',
  size: 1,
  weight: 60,
  price: 500
};


describe('pets actions', () => {
  it('addPet should call api and add pet')
  it('addPetSuccess should create ADD_PET_SUCCESS action', () => {
    expect(actions.addPetSuccess(pet)).to.deep.equal({
      type: types.CREATE_PET_SUCCESS,
      pet
    });
  });

  // it('deleteTodo should create DELETE_TODO action', () => {
  //   expect(actions.deleteTodo(1)).toEqual({
  //     type: types.DELETE_TODO,
  //     id: 1
  //   });
  // });

  // it('editTodo should create EDIT_TODO action', () => {
  //   expect(actions.editTodo(1, 'Use Redux everywhere')).toEqual({
  //     type: types.EDIT_TODO,
  //     id: 1,
  //     text: 'Use Redux everywhere'
  //   });
  // });

  // it('completeTodo should create COMPLETE_TODO action', () => {
  //   expect(actions.completeTodo(1)).toEqual({
  //     type: types.COMPLETE_TODO,
  //     id: 1
  //   });
  // });

  // it('completeAll should create COMPLETE_ALL action', () => {
  //   expect(actions.completeAll()).toEqual({
  //     type: types.COMPLETE_ALL
  //   });
  // });

  // it('clearCompleted should create CLEAR_COMPLETED action', () => {
  //   expect(actions.clearCompleted()).toEqual({
  //     type: types.CLEAR_COMPLETED
  //   });
  // });
});
