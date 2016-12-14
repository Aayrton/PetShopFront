import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {fetchPets} from './app/actions/petActions';
import configStore from './app/store/configStore';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './routes';
import './index.scss';

// Needed for onTouchTap (marerial-ui)
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = configStore();

store.dispatch(fetchPets()).then(() => {
});

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory} routes={routes}/>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

