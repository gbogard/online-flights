import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './state';
import Home from './pages/Home';
import Flights from './pages/Flights';

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" exact component={Home} />
      <Route path="/flights" exact component={Flights} />
    </ConnectedRouter>
  </Provider>
)
