import useQueryTickets from '@/hooks/query-tickets.hook';
import { PagedParams } from '@/models';
import { FC, useState } from 'react';
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight, Ellipsis, Search } from 'lucide-react';
import { Input } from '../ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Badge } from '../ui/badge';

const pagedParams = new PagedParams();

const Tickets: FC = () => {
  const [params, setParams] = useState(pagedParams);
  const { data, error, isLoading } = useQueryTickets(params);

  const setPage = (args?: PagedParams) => {
    if (args?.page && args?.page < 0) {
      args.page = 0;
    }
    const newParams = args ? { ...args } : { ...params };
    setParams((prevParams) => ({ ...prevParams, ...newParams }));
  };

  if (isLoading) return <p>...Loading</p>;
  if (error)
    return (
      <div className="text-red-600">{error.message || 'Request failed.'}</div>
    );

  return (
    <div className="p-5 bg-white">
      <div className="h-full">
        <div>
          <h1 className="text-2xl font-semibold text-slate-600 mb-4">
            Queue List
          </h1>
          <div className="w-full mb-10">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search number..."
                className="w-full appearance-none bg-background pl-8 shadow-none"
              />
            </div>
          </div>

          <div className="overflow-y-auto">
            {data?.results?.map((ticket) => (
              <div key={ticket._id}>
                <div className="p-5 hover:rounded-xl hover:shadow-lg focus-visible:outline-transparent">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold ml-1 mr-4">
                        {ticket.ticketNumber}
                      </h3>
                      <div className="flex flex-col">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 hover:bg-transparent">
                              <Ellipsis size={20} />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>Assign</DropdownMenuItem>
                            <DropdownMenuItem>
                              <span className="text-red-500">Delete</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge
                        variant={!ticket.isPriority ? 'secondary' : null}
                        className={` ${
                          ticket.isPriority
                            ? 'bg-amber-500 text-white border-transparent'
                            : ''
                        }`}>
                        {ticket.isPriority ? 'Priority' : 'Regular Transaction'}
                      </Badge>
                      <span className="text-slate-400 text-xs">Waiting</span>
                    </div>
                  </div>
                </div>
                <div className="h-px bg-gray-100 mx-4"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-5">
          <Button
            variant="outline"
            className="mr-5 rounded-xl px-2 py-1"
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
      </div>
    </div>
  );
};

export default Tickets;
