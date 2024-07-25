import { getTicketsList } from '@/api';
import { PagedParams } from '@/models';
import { useQuery } from '@tanstack/react-query';

const useQueryTickets = (params: PagedParams) => {
  return useQuery({
    queryKey: ['tickets', { ...params }],
    queryFn: () => getTicketsList(params),
  });
};

export default useQueryTickets;
