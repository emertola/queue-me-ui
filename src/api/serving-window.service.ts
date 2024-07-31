import { host } from '@/constants';
import apiClient from './api-client.service';
import { ApiResponse, ServingWindow } from '@/models';

interface WindowsQueryParams {
  unassignedOnly: string;
}

export const getWindowsList = async (
  params?: WindowsQueryParams
): Promise<ApiResponse<ServingWindow[]>> => {
  const response = await apiClient.get(`${host}/api/v1/windows/list`, {
    params,
  });
  return response.data;
};
