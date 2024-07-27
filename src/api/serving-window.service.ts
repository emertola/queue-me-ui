import { host } from '@/constants';
import apiClient from './api-client.service';
import { ApiResponse, ServingWindow } from '@/models';

export const getWindowsList = async (): Promise<
  ApiResponse<ServingWindow[]>
> => {
  const response = await apiClient.get(`${host}/api/v1/windows/list`);
  return response.data;
};
