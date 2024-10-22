import { AxiosResponse } from 'axios';
import { BasicAuthDto, PublicKeyAuthDto } from './types';
import { AlphaException } from './utils';
import { AuthenticationModuleApiRoutes } from './utils/constants';
import * as request from './utils/requests.js';

/**
 * Get the server token
 *
 * @param {String} apiKey - Api key of the user
 * @return {Promise<AxiosResponse | AlphaException>} The fetched token from the server
 * */
export const token = (apiKey?: string): Promise<AxiosResponse | AlphaException> => {
  const key = apiKey ?? process.env.BRIDGE_API_KEY;
  return request.postRequest(AuthenticationModuleApiRoutes.privateKeyAuth, { apiKey: key });
};

/**
 * Get the server token
 *
 * @param {BasicAuthDto} payload - Email & Password of the user
 * @return {Promise<AxiosResponse | AlphaException>} The fetched token from the server
 * */
export const basicAuthorization = (
  payload: BasicAuthDto,
): Promise<AxiosResponse | AlphaException> => {
  return request.postRequest(AuthenticationModuleApiRoutes.basicAuth, payload);
};

/**
 * Get the server token
 *
 * @param {PublicKeyAuthDto} payload - Public key of the user
 * @return {Promise<AxiosResponse | AlphaException>} The fetched token from the server
 * */
export const publicKeyAuthorization = (
  payload: PublicKeyAuthDto,
): Promise<AxiosResponse | AlphaException> => {
  return request.postRequest(AuthenticationModuleApiRoutes.publicKeyAuth, payload);
};

/**
 * Verifies a user's identity
 *
 * @param {String} token
 * @return {Promise<AxiosResponse | AlphaException>} The fetched token from the server
 * */
export const authentication = (token: string): Promise<AxiosResponse | AlphaException> => {
  return request.postRequest(AuthenticationModuleApiRoutes.authentication, { token: token });
};
