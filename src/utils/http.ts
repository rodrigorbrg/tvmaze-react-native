import axios from 'axios';
import { ResponseType } from '../services/tvmaze';

const appAPI = axios.create({
  baseURL: 'https://api.tvmaze.com',
  timeout: 60000
});

const defaultHeader = {
  headers: {
    'Content-Type': 'application/json'
  }
};

const coreGet = async (path: string): Promise<ResponseType<any>> => {
  try {
    const response = await appAPI.get(`${path}`, defaultHeader);
    return [null, response.data];
  } catch (error) {
    return [error, null];
  }
};

export default {
  coreGet
};
