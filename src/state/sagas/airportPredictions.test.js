import axios from 'axios';
import { expectSaga } from 'redux-saga-test-plan';
import { loadPredictions } from './airportPredictions';
import { setIsLoading, SET_PREDICTIONS } from '../airportPredictions';

describe('loadPredictions saga', () => {
  it('Should call the predictions API and set the predictions.', () => {
    return expectSaga(loadPredictions, { payload: 'NYO' })
      .put(setIsLoading(true))
      .call.like({ args: [500] })
      .call(axios.get, 'http://autocomplete.travelpayouts.com/places2?term=NYO&locale=en&types[]=airport')
      .put.actionType(SET_PREDICTIONS)
      .put(setIsLoading(false))
      .run(1000);
  });
})
