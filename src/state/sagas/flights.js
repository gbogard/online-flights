import axios from 'axios';
import {
  all,
  select,
  call,
  fork,
  put,
  takeLeading,
  takeEvery,
} from 'redux-saga/effects'
import { push } from 'connected-react-router';
import { parse, addMinutes } from 'date-fns';
import {
  getFlights,
  getDepartureAirport,
  getArrivalAirport,
  getDepartureDate,
  setFlights,
  LOAD_FLIGHTS,
  BOOK_FLIGHT,
} from '../flights';

function* bookFlight () {
  window.location = 'https://www.youtube.com/embed/uy3h-z2DTzc?start=28';
}

const formatFirstProviderFlights = flights => flights.map(f => ({
  id: f.id,
  departure: {
    airport: f.from,
    date: f.departure,
  },
  arrival: {
    airport: f.to,
    date: addMinutes(parse(f.departure), f.duration)
  },
  company: f.company,
  price: f.price,
}));

export function* loadFlightsFromFirstProvider (fromAirport, toAirport, date) {
  const url = `http://localhost:8080/flights?from=${fromAirport}&to=${toAirport}&date=${date}`;
  const { data: flights } = yield call(axios.get, url);
  const formattedFlights = formatFirstProviderFlights(flights);
  const oldFlights = yield select(getFlights);
  yield put(setFlights([...oldFlights, ...formattedFlights]));
}

export function* loadFlightsFromSecondProvider (fromAirport, toAirport, date) {
  const url = `http://localhost:8081/flights?from=${fromAirport}&to=${toAirport}&date=${date}`;
  const { data: flights } = yield call(axios.get, url);

  const oldFlights = yield select(getFlights);
  yield put(setFlights([...oldFlights, ...flights]));
}

export function* loadFlights () {
  yield put(setFlights([]));
  
  const date = yield select(getDepartureDate);
  const { code: departureAirport } = yield select(getDepartureAirport);
  const { code: arrivalAirport } = yield select(getArrivalAirport);

  yield fork(loadFlightsFromFirstProvider, departureAirport, arrivalAirport, date);
  yield fork(loadFlightsFromSecondProvider, departureAirport, arrivalAirport, date);

  yield put(push('/flights'));
}

export default function* () {
  yield all([
    takeLeading(LOAD_FLIGHTS, loadFlights),
    takeEvery(BOOK_FLIGHT, bookFlight)
  ]);
}
