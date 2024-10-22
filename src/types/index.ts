import { AxiosRequestConfig } from 'axios';

export type RequestOptions = {
  token: string;
} & AxiosRequestConfig;

export type Response = {
  statusCode: number;
  message: string;
  data: unknown;
};

export type PrivateKeyAuthDto = {
  apiKey?: string;
};

export type BasicAuthDto = {
  email: string;
  password: string;
};

export type PublicKeyAuthDto = {
  publicKey: string;
};
