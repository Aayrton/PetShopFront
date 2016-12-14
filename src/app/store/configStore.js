import {createStore, applyMiddleware} from 'redux';
import rootReducers from '../reducers/reducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger();

export default function configureStore() {
  return createStore(
    rootReducers,
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware // neat middleware that logs actions
    )
  );
}
