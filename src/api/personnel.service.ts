import { PagedParams, PagedResponse, User } from '@/models';
import apiClient from './api-client.service';
import { host } from '@/constants';

export const getPersonnelList = async (params: PagedParams) => {
  const response = await apiClient.get(`${host}/api/v1/personnel/list`, {
    params,
  });
  return response.data as PagedResponse<User>;
};
