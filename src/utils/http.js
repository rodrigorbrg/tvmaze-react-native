import axios from 'axios';

const appAPI = axios.create({
  baseURL: 'https://api.tvmaze.com',
  timeout: 60000,
});

const defaultHeader = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const coreGet = async (path) => {
  console.log(`${appAPI.defaults.baseURL}${path}`);
  try {
    let response = await appAPI.get(`${path}`, defaultHeader);
    return [null, response.data];
  } catch (error) {
    console.log('error', JSON.stringify(error));
    return [error, null];
  }
};

const corePatch = async (path, body) => {
  try {
    console.log(`${appAPI.defaults.baseURL}${path}`, body);
    let response = await appAPI.patch(`${path}`, body, defaultHeader);
    return [null, response.data];
  } catch (error) {
    console.log('error', JSON.stringify(error));
    return [error, null];
  }
};

const corePost = async (path, body) => {
  try {
    console.log(`${appAPI.defaults.baseURL}${path}`, body);
    let response = await appAPI.post(`${path}`, body, defaultHeader);
    return [null, response.data];
  } catch (error) {
    console.log('error', JSON.stringify(error));
    return [error, null];
  }
};

export default {
  coreGet,
  corePatch,
  corePost
}
