import { API_CONFIG } from './constants';

export const getData = url => {
  return fetch(`${API_CONFIG.baseUrl}${url}`, {
    headers: {
      'X-Auth-Token': API_CONFIG.token,
    },
  });
};
