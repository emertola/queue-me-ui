import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api/v1',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
