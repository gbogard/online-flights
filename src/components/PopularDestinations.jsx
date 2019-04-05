import React from 'react';
import {
  Section,
  Columns,
  Column,
  Container,
  Card,
  CardContent,
  CardImage,
  Image,
  Title,
  Content,
  Icon,
  CardFooter,
  CardFooterItem,
} from 'bloomer';

const destinations = [
  {
    name: 'Stockholm',
    price: 76,
    image: 'https://images.pexels.com/photos/208755/pexels-photo-208755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    name: 'Barcelona',
    price: 137,
    image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    name: 'Montréal',
    price: 390,
    image: 'https://www.kayak.fr/rimg/dimg/0b/56/99204762-city-6966-162cb3b418b.jpg'
  },
  {
    name: 'Roma',
    price: 121,
    image: 'https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg'
  }
]

const PopularDestinations = () => (
  <Section>
    <Container>
      <Title>Popular destinations</Title>
      <Columns>
        {
          destinations.map(({ name, price, image }) => (
            <Column>
              <Card>
                <CardImage>
                  <Image isRatio="3:2" src={image} />
                </CardImage>
                <CardContent>
                  <Content>
                    <Title isSize={4}>{name}</Title>
                    <Icon className="fa fa-plane" hasTextColor="primary" />{' '}
                    Starting at <strong>{price} €</strong>
                  </Content>
                </CardContent>
                <CardFooter>
                  <CardFooterItem href="#">Find a flight</CardFooterItem>
                </CardFooter>
              </Card>
            </Column>
          ))
        }
      </Columns>
    </Container>
  </Section>
);

export default PopularDestinations;
