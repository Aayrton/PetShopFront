import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './app/components/app';
import Homepage from './app/components/homepage';
import UpdatePage from './app/containers/updatePageContainer';
// import {Hello} from './app/hello';
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Homepage}/>
    <Route path="/pet/:petId" component={UpdatePage}/>
  </Route>
);
