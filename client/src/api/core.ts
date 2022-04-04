import axios from 'axios';
import { BASE_URL } from '../config';

const base = axios.create({
  baseURL: BASE_URL,
  timeout: 10 * 60 * 1000,
  headers: {
    'Cache-Control':
      'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
    Pragma: 'no-cache',
  },
});

export default base;
