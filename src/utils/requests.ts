import axios, { AxiosResponse } from 'axios';
import { RequestOptions } from '../types';
import { BASE_URL } from './constants.js';
import { AlphaException } from './index.js';

const axiosInstance = axios.create({ baseURL: BASE_URL });

/**
 * To send the http get requests
 *
 * @param {String} path
 * @param {RequestOptions} options
 * @return {Promise<AxiosResponse> | AlphaException} The response from the API
 * */
export const getRequest = (path: string, options?: RequestOptions): Promise<AxiosResponse> => {
  if (options?.token !== null) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${options?.token}`;
  }
  return axiosInstance.get(path, options).catch((err: AlphaException) => {
    throw err;
  });
};

/**
 * To send the http post requests
 *
 * @param {String} path
 * @param {any} payload
 * @param {RequestOptions} options
 * @return {Promise<AxiosResponse>} The response from the API
 * */
export const postRequest = (
  path: string,
  payload: unknown,
  options?: RequestOptions,
): Promise<AxiosResponse | AlphaException> => {
  if (options?.token !== null) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${options?.token}`;
  }
  return axiosInstance.post(path, payload).catch((err: AlphaException) => {
    throw err;
  });
};
