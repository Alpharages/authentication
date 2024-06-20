import * as request from './utils/requests.js';

/**
 * Get the server token
 *
 * @param {String} apiKey - Api key of the user
 * @return {Promise} The fetched token from the server
 * */
const token = async (apiKey?: string): Promise<any> => {
  const key = apiKey ?? process.env.BRIDGE_API_KEY;
  return request.postRequest('/token', { apiKey: key });
};


/**
 * Verifies a user's identity
 *
 * @param {String} token
 * @return {Promise} The fetched token from the server
 * */
const authentication = async (token: string): Promise<any> => {
  return request.postRequest('/token', null, { token: token });
};