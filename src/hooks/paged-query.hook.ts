import { PagedParams } from '@/models';
import { QueryFunction, useQuery } from '@tanstack/react-query';

const usePagedQuery = (
  params: PagedParams,
  qKey: string[],
  queryFn: QueryFunction
) => {
  return useQuery({
    queryKey: [...qKey, { ...params }],
    queryFn,
  });
};

export default usePagedQuery;
