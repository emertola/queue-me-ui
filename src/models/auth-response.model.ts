import { SignUpData } from './sign-up.model';

export interface LoginResponse {
  token: string;
}

export interface SignUpResponse extends SignUpData {
  _id: string;
}
