import React from 'react';
import styled from 'styled-components';
import {
  Card,
  CardHeader,
  CardContent,
  CardHeaderTitle,
  Media,
  MediaLeft,
  MediaContent,
  Title,
  Columns,
  Column,
  Button,
} from 'bloomer';
import { parse, format } from 'date-fns';
import companies from '../companies';

const CardWithMargin = styled(Card)`
  margin-bottom: 1rem;
`;

const Image = styled.div`
  width: 200px;
  height: 100px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`;

const formatDate = date => format(parse(date), 'dddd, MMMM Do YYYY, h:mm:ss a');

const Flight = ({
  company,
  price,
  departure,
  arrival,
  onBook,
}) => (
  <CardWithMargin>
    <CardHeader>
      <CardHeaderTitle>Flight from {departure.airport} to {arrival.airport}</CardHeaderTitle>
    </CardHeader>
    <CardContent>
      <Media>
        <MediaLeft>
          <Image src={companies[company].image} />
        </MediaLeft>
        <MediaContent>
          <Columns>
            <Column>
              Departure : {formatDate(departure.date)}
              <br />
              Arrival : {formatDate(arrival.date)}
            </Column>
            <Column>
               <Title isSize={4}>{price} €</Title>
            </Column>
            <Column>
              <Button onClick={onBook} isColor="primary">Book now !</Button>
            </Column>
          </Columns>
        </MediaContent>
      </Media>
    </CardContent>
  </CardWithMargin>
);

export default Flight;
