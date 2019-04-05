import { all } from 'redux-saga/effects';
import airportPredictions from './airportPredictions';
import flights from './flights';

export default function* () {
  yield all([
    airportPredictions(),
    flights(),
  ])
}
