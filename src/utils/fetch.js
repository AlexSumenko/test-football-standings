import { API_CONFIG } from './constants';

export const getData = url => {
  return fetch(`${API_CONFIG.baseUrl}${url}`, {
    headers: {
      'X-Auth-Token': API_CONFIG.token,
    },
  });
};

export const getDataWithSubscriptionPlan = url => {
  return fetch(`${API_CONFIG.baseUrl}${url}?plan=${API_CONFIG.plan}`, {
    headers: {
      'X-Auth-Token': API_CONFIG.token,
    },
  });
};
