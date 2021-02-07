import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Input({ label, type, name, value, onChange, errors }) {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
      {errors && <p>{errors[name]}</p>}
    </Container>
  );
}

Input.defaultProps = {
  errors: null,
  type: 'text',
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.shape({}),
};

export default Input;
