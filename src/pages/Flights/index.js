import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getFlights, getDepartureAirport, getArrivalAirport, bookFlight } from '../../state/flights';
import Flights from './Flights';

export default connect(createStructuredSelector({
  flights: getFlights,
  departureAirport: getDepartureAirport,
  arrivalAirport: getArrivalAirport
}), {
  onBook: bookFlight,
})(Flights);
