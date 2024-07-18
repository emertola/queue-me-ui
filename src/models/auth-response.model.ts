import { SignUp } from './sign-up.model';

export interface LoginResponse {
  token: string;
}

export interface SignUpResponse extends SignUp {
  _id: string;
}
