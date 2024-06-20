import { AxiosRequestConfig } from 'axios';

export type RequestOptions = {
  token: string;
} & AxiosRequestConfig;

export type Response = {
  statusCode: number;
  message: string;
  data: unknown;
};
