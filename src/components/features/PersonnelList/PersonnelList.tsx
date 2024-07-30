import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { FC, useState } from 'react';
import { getPersonnelList } from '@/api';
import usePagedQuery from '@/hooks/paged-query.hook';
import { PagedParams, PagedResponse, User } from '@/models';
import DataTable from './data-table';
import { columns } from './columns';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const pagedParams = new PagedParams();

const PersonnelList: FC = () => {
  const [params, setParams] = useState(pagedParams);
  const { data, error, isLoading } = usePagedQuery(params, ['personnel'], () =>
    getPersonnelList(params)
  );
  const responseData = data as PagedResponse<User>;

  const setPage = (args?: PagedParams) => {
    if (args?.page && args?.page < 0) {
      args.page = 0;
    }
    const newParams = args ? { ...args } : { ...params };
    setParams((prevParams) => ({ ...prevParams, ...newParams }));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <div className="text-red-600">{error.message || 'Request failed.'}</div>
    );

  return (
    <div className="p-4">
      <Card>
        <CardHeader className="p-4 px-5">
          <CardTitle className="text-2xl font-semibold text-gray-800">
            Personnel
          </CardTitle>
          <CardDescription>
            Add, edit, and delete personnel, and assign window.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={responseData?.results} />
        </CardContent>
        <CardFooter className="justify-center">
          <div className="text-center pt-4">
            <Button
              variant="outline"
              className="mr-5 rounded-xl px-2 py-1"
              disabled={!responseData?.currentPage}
              onClick={() =>
                setPage({ page: params.page - 1, size: params.size })
              }>
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="outline"
              className="rounded-xl px-2 py-1"
              onClick={() =>
                setParams((prev) => ({ ...prev, page: prev.page + 1 }))
              }>
              <ChevronRight size={20} />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PersonnelList;
