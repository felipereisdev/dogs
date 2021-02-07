const baseUrl = 'https://dogsapi.origamid.dev/json';

const api = async (url, method, data) => {
  const response = await fetch(`${baseUrl}${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

export default api;
