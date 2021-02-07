import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Button({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
