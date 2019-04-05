import { path, pipe, sortBy, prop } from 'ramda';
import { createAction, createReducer, setter } from 'redux-adjunct';
import { format } from 'date-fns'

const action = createAction('FLIGHTS');

export const [SET_DEPARTURE_AIRPORT, setDepartureAirport] = action('SET_DEPARTURE_AIRPORT');

export const [SET_ARRIVAL_AIRPORT, setArrivalAirport] = action('SET_ARRIVAL_AIRPORT');

export const [SET_FLIGHTS, setFlights] = action('SET_FLIGHTS');

export const [SET_DEPARTURE_DATE, setDepartureDate] = action('SET_DEPARTURE_DATE');

export const [LOAD_FLIGHTS, loadFlights] = action('LOAD_FLIGHTS');

export const [BOOK_FLIGHT, bookFlight] = action('BOOK_FLIGHT');

const initialState = {
  departureAirport: null,
  arrivalAirport: null,
  departureDate: format(new Date(), 'YYYY-MM-DD'),
  flights: [],
};

export const getDepartureAirport = path(['flights', 'departureAirport']);

export const getArrivalAirport = path(['flights', 'arrivalAirport']);

export const getFlights = pipe(path(['flights', 'flights']), sortBy(prop('price')));

export const getDepartureDate = path(['flights', 'departureDate']);

export default createReducer(initialState, {
  [SET_DEPARTURE_AIRPORT]: setter('departureAirport'),
  [SET_ARRIVAL_AIRPORT]: setter('arrivalAirport'),
  [SET_DEPARTURE_DATE]: setter('departureDate'),
  [SET_FLIGHTS]: setter('flights'),
});

