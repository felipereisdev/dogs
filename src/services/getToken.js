import api from '../api';

export default async function getToken(data) {
  const { token } = await api('/jwt-auth/v1/token', 'POST', data);

  return token;
}
