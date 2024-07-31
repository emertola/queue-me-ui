import { ApiResponse, PagedParams, PagedResponse, User } from '@/models';
import apiClient from './api-client.service';
import { host } from '@/constants';

export const getPersonnelList = async (params: PagedParams) => {
  const response = await apiClient.get(`${host}/api/v1/personnel/list`, {
    params,
  });
  return response.data as PagedResponse<User>;
};

export const assignPersonnelToWindow = async (data: {
  windowId: string;
  personnelId: string;
}) => {
  const response = await apiClient.put(
    `${host}/api/v1/personnel/${data.personnelId}`,
    data
  );
  return response.data as ApiResponse<User>;
};
