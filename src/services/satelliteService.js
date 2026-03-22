import axios from 'axios';

const API_BASE_URL = '/api/v1';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const getSatellitePosition = async (group, name) => {
  const response = await apiClient.post('/satellites/satellitePosition', {
    satelliteGroup: group,
    satelliteName: name,
  });
  return response.data;
};
