import {GET_ALL} from '../actions/petAction';

const initialState = {
	pets: []
}

function petApp (state = initialState, action) {

	switch (action.type) {

		case ADD_PET:
			return Object.assign({}, state, {
				pets: [
					...states.pets,
					action.pet
				]
			})

		case GET_ALL:
			let todos = state.pets;
			return Object.assign({}, state, {
				pets: [
					states.pets,

				]
			})



		default:
			return state;
	}

}
