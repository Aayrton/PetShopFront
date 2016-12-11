// action types

export const ADD_PET = 'ADD_PET';
export const DELETE_PET = 'DELETE_PET';
export const UPDATE_PET = 'UPDATE_PET';
export const GET_ALL = 'GET_ALL';
export const REQUEST_POSTS = 'REQUEST_POSTS'

export const status =

export function addPet(pet) {
  return { type: ADD_PET, pet }
}

export function deletePet(pet) {
  return { type: DELETE_PET, pet }
}

export function updatePet(pet) {
  return { type: UPDATE_PET, pet }
}

export function getAll() {
	return { type: GET_ALL }
}
