import useQueryTickets from '@/hooks/query-tickets.hook';
import { PagedParams } from '@/models';
import { FC, useState } from 'react';
import { Button } from '../ui/button';

const pagedParams = new PagedParams();

const Tickets: FC = () => {
  const [params, setParams] = useState(pagedParams);
  const { data, error, isLoading } = useQueryTickets(params);

  const setPage = (args?: PagedParams) => {
    const newParams = args ? { ...args } : { ...params };
    setParams((prevParams) => ({ ...prevParams, ...newParams }));
  };

  if (isLoading) return <p>...Loading</p>;
  if (error)
    return (
      <div className="text-red-600">{error.message || 'Request failed.'}</div>
    );

  return (
    <div>
      <h1>Tickets</h1>
      <ul>
        {data?.results.map((ticket) => (
          <li key={ticket._id}># {ticket.ticketNumber}</li>
        ))}
      </ul>
      <Button
        onClick={() => setPage({ page: params.page - 1, size: params.size })}>
        Previous
      </Button>
      <Button
        onClick={() => setParams((prev) => ({ ...prev, page: prev.page + 1 }))}>
        Next
      </Button>
    </div>
  );
};

export default Tickets;
