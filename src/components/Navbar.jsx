import React from 'react';
import { Navbar as Nav, NavbarBrand, NavbarItem } from 'bloomer';
import styled from 'styled-components';

const Navbar = ({ className }) => (
  <Nav className={className}>
    <NavbarBrand>
      <NavbarItem>
        Online flights
      </NavbarItem>
    </NavbarBrand>
  </Nav>
);

export const NavbarWithBorder = styled(Navbar)`
  border-bottom: solid 1px white;
`;

export default Navbar;
