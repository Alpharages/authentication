import { AxiosError, AxiosResponse } from 'axios';
import { Response } from '../types';

export class AlphaException extends AxiosError {
  constructor() {
    super();
  }
  response?: AxiosResponse<Response, this>;
}
