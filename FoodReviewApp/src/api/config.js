import axios from 'axios';
import { API_BASE_URL } from '../Assets/constants/Color';

export const POST = (path, data) => {
  return axios.post(API_BASE_URL.url + path, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const GET = (path) => {
  return axios.get(API_BASE_URL.url + path, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const DELETE = (path, data) => {
  return axios.delete(API_BASE_URL.url + path, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const PATCH = (path, data) => {
  return axios.patch(API_BASE_URL.url + path, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
