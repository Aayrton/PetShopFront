import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {App} from './app/components/app';
import {PetForm} from './app/components/pet/petForm';
// import {PetPage} from './app/components/pet/petPage';
import {PetsPage} from './app/components/pet/petsPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PetsPage}/>
    <Route path="/create" component={PetForm}/>
  </Route>
);
