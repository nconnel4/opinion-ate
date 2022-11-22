import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.outsidein.dev/2vKFySBWh5NL5CfOcCV4ZDEjr5sEvFaV',
});

const api = {
  async loadRestaurants() {
    const response = await client.get('/restaurants');
    return response.data;
  },
};
export default api;
