import axios from 'axios';
import {
  call,
  put,
  take,
  delay,
  cancel,
  fork,
} from 'redux-saga/effects'
import {
  map,
  pick,
  slice,
  pipe,
} from 'ramda';
import {
  setPredictions,
  LOAD_PREDICTIONS,
  setIsLoading,
} from '../airportPredictions';

const debounceTime = 500;

const sanitizePredictions = pipe(
  map(pick(['name', 'code'])),
  slice(0, 4),
)

export function* loadPredictions ({ payload: query }) {
  if (!query || query.length < 3) {
    yield put(setPredictions([]));
    return;
  }

  yield put(setIsLoading(true));
  yield delay(debounceTime);
  
  const url = `http://autocomplete.travelpayouts.com/places2?term=${query}&locale=en&types[]=airport`;
  const { data } = yield call(axios.get, url);
  yield put(setPredictions(sanitizePredictions(data)));
  yield put(setIsLoading(false));
}

export default function* () {
  let task;
  while(true) {
    const action = yield take(LOAD_PREDICTIONS);
    if (task) {
      yield cancel(task)
    }
    task = yield fork(loadPredictions, action)
  }
};
