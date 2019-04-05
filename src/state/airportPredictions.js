import { path } from 'ramda';
import { createAction, createReducer, setter } from 'redux-adjunct';

console.log(createAction, createReducer, setter)

const action = createAction('AIRPORT_PREDICTIONS');

export const [LOAD_PREDICTIONS, loadPredictions] = action('LOAD_PREDICTIONS');

export const [SET_IS_LOADING, setIsLoading] = action('SET_IS_LOADING');

export const [SET_PREDICTIONS, setPredictions] = action('SET_PREDICTIONS');

const initialState = {
  isLoading: false,
  predictions: [],
};

export const getPredictions = path(['airportPredictions', 'predictions']);

export const getIsLoading = path(['airportPredictions', 'isLoading']);

export default createReducer(initialState, {
  [SET_IS_LOADING]: setter('isLoading'),
  [SET_PREDICTIONS]: setter('predictions')
});
