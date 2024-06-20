import { AxiosRequestConfig } from 'axios';

export type RequestOptions = {
  token: string;
} & AxiosRequestConfig;
