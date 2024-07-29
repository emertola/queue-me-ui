import { LoginData } from './login-data.model';

export interface SignUpData extends LoginData {
  firstName: string;
  lastName: string;
  gender: string;
  confirmPassword: string;
}
