import React, { Fragment } from 'react';
import {
  Columns,
  Column,
  Section,
  Title,
} from 'bloomer';
import Navbar from '../../components/Navbar';
import Flight from '../../components/Flight';

const Flights = ({
  departureAirport,
  arrivalAirport,
  flights,
  onBook,
}) => (
  <Fragment>
    <Navbar className="is-primary" />
    <Section>
      <Columns>
        <Column isSize={3}>
        </Column>
        <Column isSize={7}>
          <Title>Flights from {departureAirport.name} to {arrivalAirport.name}</Title>
          {flights.map(f => <Flight onBook={onBook} key={f.id} {...f} />)}
        </Column>
        <Column isSize={2}>
        </Column>
      </Columns>
    </Section>
  </Fragment>
)

export default Flights;
