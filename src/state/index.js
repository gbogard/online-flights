import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import saga from './sagas';
import airportPredictions from './airportPredictions';
import flights from './flights';

const sagaMiddleware = createSagaMiddleware()
export const history = createBrowserHistory()

const store = createStore(
  combineReducers({
    router: connectRouter(history),
    airportPredictions,
    flights,
  }),
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware
    ),
  ),
);

sagaMiddleware.run(saga);

export default store;
