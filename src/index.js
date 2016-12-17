import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {fetchPets} from './app/actions/petActions';
import configStore from './app/store/configStore';
import routes from './routes';
import './app/style/settings.scss';
import './index.scss';

const store = configStore();

store.dispatch(fetchPets());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);

