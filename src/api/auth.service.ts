import {
  ApiResponse,
  LoginData,
  LoginResponse,
  SignUp,
  SignUpResponse,
  User,
} from '@/models';
import apiClient from './api-client.service';
import { host } from '@/constants';

export const loginPromise = async (data: LoginData) => {
  const response = await apiClient.post<Promise<ApiResponse<LoginResponse>>>(
    `${host}/api/v1/auth/login`,
    data
  );
  localStorage.setItem('token', (await response.data).data.token);
  return response;
};

export const login = async (data: LoginData) => {
  const response = await loginPromise(data);
  localStorage.setItem('token', (await response.data).data.token);
  return response.data;
};

export const signUp = async (data: SignUp): Promise<SignUpResponse> => {
  const response = await apiClient.post<SignUpResponse>(
    `${host}/api/v1/auth/signup`,
    data
  );
  return response.data;
};

export const currentUser = async (): Promise<ApiResponse<User>> => {
  const response = await apiClient.get<ApiResponse<User>>(
    `${host}/api/v1/auth/me`
  );
  return response.data;
};

export const getToken = () => localStorage.getItem('token');
export const cacheUser = (data: User) =>
  localStorage.setItem('user', JSON.stringify(data));
