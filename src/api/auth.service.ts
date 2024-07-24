import {
  ApiResponse,
  LoginData,
  LoginResponse,
  SignUp,
  SignUpResponse,
} from '@/models';
import apiClient from './api-client.service';

export const login = async (
  data: LoginData
): Promise<ApiResponse<LoginResponse>> => {
  const response = await apiClient.post<ApiResponse<LoginResponse>>(
    'http://localhost:4001/api/v1/auth/login',
    data
  );
  localStorage.setItem('token', response.data.data.token);
  return response.data;
};

export const signUp = async (data: SignUp): Promise<SignUpResponse> => {
  const response = await apiClient.post<SignUpResponse>(
    'http://localhost:4001/api/v1/auth/signup',
    data
  );
  return response.data;
};

export const getToken = () => localStorage.getItem('token');
