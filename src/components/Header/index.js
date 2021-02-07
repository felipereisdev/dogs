import React from 'react';

import dogsImg from '../../assets/dogs.svg';

import { Container, Nav, Logo, LoginButton } from './styles';

function Header() {
  return (
    <Container>
      <Nav>
        <Logo to="/">
          <img src={dogsImg} alt="Logo" />
        </Logo>
        <LoginButton to="/login">Login / Register</LoginButton>
      </Nav>
    </Container>
  );
}

export default Header;
