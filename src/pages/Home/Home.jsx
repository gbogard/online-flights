import React, { Fragment } from 'react';
import {
  Container,
  Hero,
  HeroBody,
  Title,
  Columns,
  Column,
  HeroHeader,
  Input,
  Field,
  Control,
  Button,
} from 'bloomer';
import { path, pipe } from 'ramda';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import AirportInput from '../../components/AirportInput';
import PopularDestinations from '../../components/PopularDestinations';
import { NavbarWithBorder as Navbar } from '../../components/Navbar';

import 'react-datepicker/dist/react-datepicker.css';

const Home = ({
  predictions,
  arePredictionsLoading,
  onAirportInputChange,
  departureAirport,
  arrivalAirport,
  onArrivalAirportChange,
  onDepartureAirportChange,
  date,
  onDateChange,
  onSubmit,
}) => (
  <Fragment>
    <Hero isColor="primary" isSize="medium">
      <HeroHeader>
        <Navbar />
      </HeroHeader>
      <HeroBody>
        <Container hasTextAlign="centered">
          <Title>Book the best flights at the best prices.</Title>
          <p>
            <i>Online Flights</i> searches hundreds of websites to find the
            best prices.
          </p>
        </Container>
        <br />
        <Container>
          <Columns>
            <Column>
              <AirportInput
                placeholder="From?"
                isLoading={arePredictionsLoading}
                onInputChange={onAirportInputChange}
                value={departureAirport}
                predictions={predictions}
                onChange={onDepartureAirportChange}
              />
            </Column>
            <Column>
              <AirportInput
                placeholder="To?"
                isLoading={arePredictionsLoading}
                onInputChange={onAirportInputChange}
                value={arrivalAirport}
                predictions={predictions}
                onChange={onArrivalAirportChange}
              />
            </Column>
            <Column>
              <Field>
                <Control>
                  <Input
                    placeholder="When?"
                    value={date}
                    onChange={pipe(path(['target', 'value']), onDateChange)}
                  />
                </Control>
              </Field>
            </Column>
            <Column isSize={1}>
              <Button isFullWidth onClick={onSubmit}>Go !</Button>
            </Column>
          </Columns>
        </Container>
      </HeroBody>
    </Hero>
    <PopularDestinations />
  </Fragment>
)

export default Home;
