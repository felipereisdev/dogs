import styled from 'styled-components';
import { Link } from 'react-router-dom';

import userSvg from '../../assets/user.svg';

export const Container = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background: white;
  top: 0;
`;

export const Nav = styled.nav`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

export const Logo = styled(Link)`
  padding: 0.5rem 0;
`;

export const LoginButton = styled(Link)`
  color: #333;
  display: flex;
  align-items: center;

  &::after {
    content: '';
    display: inline-block;
    width: 14px;
    height: 17px;
    background: url(${userSvg}) no-repeat center center;
    margin-left: 0.5rem;
    position: relative;
    top: -1px;
  }
`;
