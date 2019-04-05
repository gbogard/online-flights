import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  getIsLoading,
  getPredictions,
  loadPredictions,
} from '../../state/airportPredictions';
import {
  getDepartureAirport,
  getArrivalAirport,
  setArrivalAirport,
  setDepartureAirport,
  getDepartureDate,
  setDepartureDate,
  loadFlights,
} from '../../state/flights';

import Home from './Home';

export default connect(
  createStructuredSelector({
    predictions: getPredictions,
    arePredictionsLoading: getIsLoading,
    departureAirport: getDepartureAirport,
    arrivalAirport: getArrivalAirport,
    date: getDepartureDate,
  }),
  {
    onAirportInputChange: loadPredictions,
    onArrivalAirportChange: setArrivalAirport,
    onDepartureAirportChange: setDepartureAirport,
    onDateChange: setDepartureDate,
    onSubmit: loadFlights,
  }
)(Home);
