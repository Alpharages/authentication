import { BASE_URL } from './constants.js';
import got, { Response } from 'got';
import { RequestOptions } from '../types/index.js';
import { AlphaException } from './index.js';

const gotInstance = got.extend({ prefixUrl: BASE_URL });

/**
 * To send the http get requests
 *
 * @param {String} path
 * @param {RequestOptions} options
 * @return {Promise<Response>} The response from the API
 * */
export const getRequest = (path: string, options?: RequestOptions): Promise<Response> => {
  if (options?.token) {
    gotInstance.defaults.options.headers.Authorization = `Bearer ${options?.token}`;
  }
  return gotInstance.get(path).then((response) => response).catch((err) => {
    console.error(err);
    throw new AlphaException(`Error occurred while hitting this route "${err.config.url}": ${err.response.data.message}`);
  });
};

/**
 * To send the http post requests
 *
 * @param {String} path
 * @param {any} payload
 * @param {RequestOptions} options
 * @return {Promise<Response>} The response from the API
 * */
export const postRequest = (path: string, payload: any, options?: RequestOptions): Promise<Response> => {
  if (options?.token) {
    gotInstance.defaults.options.headers.Authorization = `Bearer ${options?.token}`;
  }
  return gotInstance.post(path, payload).catch((err) => {
    console.error(err);
    throw new AlphaException(`Error occurred while hitting this route "${err.config.url}": ${err.response.data.message}`);
  });
};
