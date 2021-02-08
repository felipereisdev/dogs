import api from '../api';

export default async function getUser(token) {
  const user = await api(
    '/api/user',
    'GET',
    {},
    {
      Authorization: `Bearer ${token}`,
    }
  );

  return user;
}
