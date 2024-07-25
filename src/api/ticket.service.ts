import { PagedParams, PagedResponse, Ticket } from '@/models';
import apiClient from './api-client.service';
import { host } from '@/constants';

export const getTicketsList = async (params: PagedParams) => {
  const response = await apiClient.get(`${host}/api/v1/ticket/list`, {
    params,
  });
  return response.data as PagedResponse<Ticket>;
};
