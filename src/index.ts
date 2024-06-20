import { AxiosResponse } from 'axios';
import { AlphaException } from './utils';
import * as request from './utils/requests.js';

/**
 * Get the server token
 *
 * @param {String} apiKey - Api key of the user
 * @return {Promise<AxiosResponse | AlphaException>} The fetched token from the server
 * */
export const token = (apiKey?: string): Promise<AxiosResponse | AlphaException> => {
  const key = apiKey ?? process.env.BRIDGE_API_KEY;
  return request.postRequest('/token', { apiKey: key });
};

/**
 * Verifies a user's identity
 *
 * @param {String} token
 * @return {Promise<AxiosResponse | AlphaException>} The fetched token from the server
 * */
export const authentication = (token: string): Promise<AxiosResponse | AlphaException> => {
  return request.postRequest('/token', null, { token: token });
};
