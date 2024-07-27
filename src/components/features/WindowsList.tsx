import { getWindowsList } from '@/api';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import AssignedWindow from './Window';

const WindowsList: FC = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['swindows'],
    queryFn: getWindowsList,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <div className="text-red-600">{error.message || 'Request failed.'}</div>
    );

  return (
    <div className="flex flex-wrap gap-4 p-2">
      {data?.data?.map((swindow) => (
        <div key={swindow._id}>
          <AssignedWindow
            isMe={false}
            ticketNumber={swindow.nowServing?.ticketNumber}
            windowStatus={swindow.windowStatus}
            windowName={swindow.windowName}
          />
        </div>
      ))}
    </div>
  );
};

export default WindowsList;
