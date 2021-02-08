const baseUrl = 'https://dogsapi.origamid.dev/json';

const api = async (url, method, data = {}, headers = {}) => {
  headers = {
    'Content-Type': 'application/json',
    ...headers,
  };

  let options = {
    method,
    headers,
  };

  if (Object.keys(data).length !== 0) {
    options = {
      ...options,
      body: JSON.stringify(data),
    };
  }

  const response = await fetch(`${baseUrl}${url}`, options);

  return response.json();
};

export default api;
