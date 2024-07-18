import { LoginData } from './login-data.model';

export interface SignUp extends LoginData {
  firstName: string;
  lastName: string;
}
