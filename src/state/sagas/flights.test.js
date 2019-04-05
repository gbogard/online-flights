import axios from 'axios';
import { expectSaga } from 'redux-saga-test-plan';
import { loadFlights, loadFlightsFromFirstProvider, loadFlightsFromSecondProvider } from './flights';

describe('loadFlights saga', () => {
  it('Should call the two providers with appropriate arguments.', () => {
    return expectSaga(loadFlights)
      .withState({
        flights: {
          flights: [],
          departureAirport: { code: 'CDG' },
          arrivalAirport: { code: 'NYO' },
          departureDate: 'DATE',
        }
      })
      .fork(loadFlightsFromFirstProvider, 'CDG', 'NYO', 'DATE')
      .fork(loadFlightsFromSecondProvider, 'CDG', 'NYO', 'DATE')
      .run(2000)
  });
})
