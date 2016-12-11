import {createStore, applyMiddleware} from 'redux';
import petReducer from '../reducers/petReducer';
import thunk from 'redux-thunk';

export default function configureStore() {
  return createStore(
    petReducer,
    applyMiddleware(thunk)
  );
}
