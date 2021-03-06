import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';
import getToken from '../../services/getToken';
import getUser from '../../services/getUser';

import useForm from '../../hooks/useForm';

import Input from '../../components/Forms/Input';
import Button from '../../components/Forms/Button';

import { Container } from './styles';

function Login() {
  const username = useForm();
  const password = useForm();

  const [errors, setErrors] = useState(null);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      try {
        const schema = Yup.object().shape({
          username: Yup.string().required('E-mail obrigatório'),
          /* .email('Digite um e-mail válido') */ password: Yup.string().required(
            'Senha obrigatória'
          ),
        });

        const data = {
          username: username.value,
          password: password.value,
        };

        await schema.validate(data, {
          abortEarly: false,
        });

        const token = await getToken(data);
        const user = await getUser(token);

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          setErrors(getValidationErrors(err));
        }
      }
    },
    [username, password]
  );

  return (
    <Container>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <Input label="User" name="username" {...username} {...errors} />

        <Input label="Password" name="password" {...password} {...errors} />

        <Button type="submit">Enter</Button>
      </form>

      <Link to="/register">Register</Link>
    </Container>
  );
}

export default Login;
